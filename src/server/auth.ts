import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";

import bcrypt from "bcryptjs";

import { env } from "~/env";
import { db } from "~/server/db";
import Credentials from "next-auth/providers/credentials";
import { randomUUID } from "crypto";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
const prisma = new PrismaClient();
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const adapter = PrismaAdapter(db) as Adapter;
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  // callbacks: {
  //   session: ({ session, user }) => ({
  //     ...session,
  //     user: {
  //       ...session.user,
  //       id: user.id,
  //     },
  //   }),
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = randomUUID();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return "defaultEncode(params)";
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Here have to parse for validation

        const { email, password } = credentials;

        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (!user) {
          return null;
        }

        if (!user.password) {
          return null;
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        // if (!isValidPassword) {
        //   return null;
        // }

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);

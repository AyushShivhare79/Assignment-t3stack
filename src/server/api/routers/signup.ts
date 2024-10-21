import { z } from "zod";
import bcrypt from "bcryptjs";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const signUpRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(7) }))
    .mutation(async ({ ctx, input }) => {
      const saltRounds = 10;
      const hash = await bcrypt.hash(input.password, saltRounds);
      console.log("Hash: ", hash);
      return await ctx.db.user.create({
        data: {
          email: input.email,
          password: hash,
        },
      });
    }),
  find: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.db.user.findFirst({
        where: {
          email: input.email,
        },
      });
      if (response) {
        return {
          message: "User already exists!",
        };
      }
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

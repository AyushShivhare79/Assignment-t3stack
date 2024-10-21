"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CustomHome = () => {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Button
          onClick={async () =>
            session
              ? await signOut({ callbackUrl: "/signin" })
              : router.push("/signin")
          }
          className="bg-blue-600 hover:bg-white hover:text-black"
        >
          {session ? "SignOut" : "SignIn"}
        </Button>
      </div>
    </>
  );
};

export default CustomHome;

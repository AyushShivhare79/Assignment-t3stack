"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

const CustomHome = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Button
          onClick={async () => await signOut({ callbackUrl: "/signin" })}
          className="bg-blue-600 hover:bg-white hover:text-black"
        >
          SignOut
        </Button>
      </div>
    </>
  );
};

export default CustomHome;

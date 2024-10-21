"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SignupGoogle = () => {
  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
    console.log("Response", response);
  };

  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white text-xl text-black hover:bg-blue-500 hover:text-white"
        onClick={handleClick}
      >
        <FcGoogle className="text-5xl" />
        <div>Sign in with Google</div>
      </div>
    </>
  );
};

export default SignupGoogle;

"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import CustomCard from "./customCard";

const SigninCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log("Response", response);
  };

  return (
    <>
      {/* Use form from shadcn */}
      {/* Start changing */}
      {JSON.stringify({ email, password })}
      <CustomCard
        onEmailChange={(e: any) => setEmail(e.target.value)}
        onPasswordChange={(e: any) => setPassword(e.target.value)}
        onButtonClick={handleClick}
        buttonName="SignIn"
      />
    </>
  );
};

export default SigninCard;

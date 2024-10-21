"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
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
      <CustomCard
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onButtonClick={handleClick}
        title="Login"
        buttonName="SignIn"
      />
    </>
  );
};

export default SigninCard;

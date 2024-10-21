"use client";

import { api } from "~/trpc/react";
import { useState } from "react";
import CustomCard from "./customCard";

const SignupCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = api.signup.create.useMutation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = createUser.mutate({ email, password });
    console.log("HERE: ", response);
  };

  return (
    <>
      {/* Use form from shadcn */}
      {/* Start changing */}
      <CustomCard
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onButtonClick={handleClick}
        title="Create Account"
        buttonName="Signup"
      />
    </>
  );
};

export default SignupCard;

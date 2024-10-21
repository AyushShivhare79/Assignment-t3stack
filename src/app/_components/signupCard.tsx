"use client";

import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import CustomCard from "./customCard";
import { useRouter } from "next/navigation";

const SignupCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const createUser = api.signup.create.useMutation();

  useEffect(() => {
    if (createUser.isSuccess) {
      router.push("/signin");
    }
  }, [createUser.isSuccess]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const response = createUser.mutate({ email, password });
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
        redirectName="Login"
        url="/signin"
        footerText="Already have an account? "
      />
    </>
  );
};

export default SignupCard;

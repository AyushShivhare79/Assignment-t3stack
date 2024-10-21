"use client";

import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { useState } from "react";
import CustomCard from "./customCard";

const SignupCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = api.signup.create.useMutation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    createUser.mutate({ email, password });
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
        buttonName="Signup"
      />

      {/* <Card className="w-1/4">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            placeholder="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleClick}
            className="flex w-full items-center justify-center"
          >
            Signup
          </Button>
        </CardFooter>
      </Card> */}
    </>
  );
};

export default SignupCard;

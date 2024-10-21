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
import { useState } from "react";

const CustomCard = ({ onEmailChange, onPasswordChange, onButtonClick, buttonName }: any) => {
  return (
    <>
      {/* Use form from shadcn */}

      <Card className="w-1/4">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Email" onChange={onEmailChange} />
          <Input placeholder="Password" onChange={onPasswordChange} />
        </CardContent>
        <CardFooter>
          <Button
            onClick={onButtonClick}
            className="flex w-full items-center justify-center"
          >
            {buttonName}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CustomCard;

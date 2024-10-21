import { Input } from "~/components/ui/input";
import Highlight from "../../../public/Highlight 28.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import SignupGoogle from "./signupGoogle";
import Image from "next/image";

const Signup = () => {
  return (
    <>
      {/* Use form from shadcn */}

      <div className="flex h-screen items-center justify-between border border-black px-96">
        <Card className="w-1/4">
          <CardHeader>
            {/* <CardTitle>Create Account</CardTitle> */}
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </CardContent>
          <CardFooter>
            <Button className="flex w-full items-center justify-center">
              Create Account
            </Button>
          </CardFooter>
        </Card>
        <Image
          src={Highlight}
            width={50}
            height={50}
          alt="Picture of the author"
        />
        <SignupGoogle />
      </div>
    </>
  );
};

export default Signup;

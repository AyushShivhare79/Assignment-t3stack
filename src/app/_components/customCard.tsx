import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Link from "next/link";

interface customCardProps {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  buttonName: string;
  url: string;
  redirectName: string;
  footerText: string;
}
const CustomCard = ({
  onEmailChange,
  onPasswordChange,
  onButtonClick,
  title,
  buttonName,
  url,
  redirectName,
  footerText,
}: customCardProps) => {
  return (
    <>
      {/* Use form from shadcn */}

      <Card className="w-1/4">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Email" onChange={onEmailChange} />
          <Input placeholder="Password" onChange={onPasswordChange} />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            onClick={onButtonClick}
            className="flex w-full items-center justify-center"
          >
            {buttonName}
          </Button>

          <div>
            {footerText}
            <Link href={url} className="text-blue-600">
              {redirectName}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CustomCard;

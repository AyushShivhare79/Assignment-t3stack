import SignupGoogle from "../_components/signupGoogle";
import SignupCard from "../_components/signupCard";
import Image from "next/image";
import Highlight from "../../../public/Highlight 28.png";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center gap-20 border border-white">
        <SignupCard />

        <Image
          src={Highlight}
          width={100}
          height={100}
          alt="Picture of the author"
        />

        <SignupGoogle />
      </div>
    </>
  );
};

export default Signup;

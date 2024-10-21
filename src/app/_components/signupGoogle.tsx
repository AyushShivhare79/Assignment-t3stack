import { FcGoogle } from "react-icons/fc";

const SignupGoogle = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white text-xl text-black hover:bg-blue-500 hover:text-white">
        <FcGoogle className="text-5xl" />
        <div>Sign in with Google</div>
      </div>
    </>
  );
};

export default SignupGoogle;

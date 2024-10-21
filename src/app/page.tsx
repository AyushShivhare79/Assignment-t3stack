import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Signup from "./_components/signup";
import SignupGoogle from "./_components/signupGoogle";

export default async function Home() {
  // const hello = await api.signup.create.
  // const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Signup/>
    </HydrateClient>
  );
}

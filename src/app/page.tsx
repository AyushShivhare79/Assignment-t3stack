import { HydrateClient } from "~/trpc/server";

import CustomHome from "./_components/customHome";
export default async function Home() {
  return (
    <HydrateClient>
      <CustomHome />
    </HydrateClient>
  );
}

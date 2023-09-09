import { LoginModule } from "../modules/login";
import { NextPage } from "next";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Index() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard/home");
  }
  return <LoginModule />;
}

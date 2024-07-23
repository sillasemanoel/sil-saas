import { cookies } from "next/headers";
import { auth } from "@/services/auth";
import { NavSite } from "@/app/(pages)/(site)/_components/nav-site";
import { MainStart } from "@/app/(pages)/(site)/(start)/_components/main-page";
import { Developer } from "@/app/(pages)/(site)/_components/developer";

export default async function Start() {
  const cookieStore = cookies();
  const token = cookieStore.get("authjs.session-token");
  const isAuthenticated = !!token;
  const session = await auth();

  return (
    <section>
      <NavSite isAuthenticated={isAuthenticated} user={session?.user} />
      <MainStart />
      <Developer />
    </section>
  );
}

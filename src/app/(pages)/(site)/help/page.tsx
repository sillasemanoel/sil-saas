import { cookies } from "next/headers";
import { auth } from "@/services/auth";
import { NavSite } from "@/app/(pages)/(site)/_components/nav-site";
import { MainHelp } from "@/app/(pages)/(site)/help/_components/main-page";
import { Developer } from "@/app/(pages)/(site)/_components/developer";

export default async function Help() {
  const cookieStore = cookies();
  const token = cookieStore.get("authjs.session-token");
  const isAuthenticated = !!token;
  const session = await auth();

  return (
    <section>
      <NavSite isAuthenticated={isAuthenticated} user={session?.user} />
      <MainHelp />
      <Developer />
    </section>
  );
}

import { cookies } from "next/headers";
import { auth } from "@/services/auth";
import { NavSite } from "@/app/(pages)/(site)/_components/nav-site";
import { MainBlog } from "@/app/(pages)/(site)/blog/_components/main-page";
import { Developer } from "@/app/(pages)/(site)/_components/developer";

export default async function Blog() {
  const cookieStore = cookies();
  const token = cookieStore.get("authjs.session-token");
  const isAuthenticated = !!token;
  const session = await auth();

  return (
    <section>
      <NavSite isAuthenticated={isAuthenticated} user={session?.user} />
      <MainBlog />
      <Developer />
    </section>
  );
}

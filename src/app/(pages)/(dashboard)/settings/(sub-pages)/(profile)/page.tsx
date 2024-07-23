import { auth } from "@/services/auth";
import { MainProfile } from "@/app/(pages)/(dashboard)/settings/(sub-pages)/(profile)/_components/main-profile";

export default async function Profile() {
  const session = await auth();

  return <MainProfile user={session?.user} />;
}

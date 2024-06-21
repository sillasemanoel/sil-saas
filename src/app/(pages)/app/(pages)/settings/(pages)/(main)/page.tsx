import { auth } from "@/services/auth";
import { ProfileForm } from "@/app/(pages)/app/(pages)/settings/(pages)/(main)/_components/form";

export default async function Page() {
  const session = await auth();

  return <ProfileForm defaultValues={session?.user} />;
}

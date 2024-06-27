import { auth } from "@/services/auth";
import { FormProfile } from "@/app/(pages)/app/(pages)/settings/(pages)/(main)/_components/form-page";

export default async function Page() {
  const session = await auth();

  return <FormProfile defaultValues={session?.user} />;
}

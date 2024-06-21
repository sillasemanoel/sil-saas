import { auth } from "@/services/auth";
import { FormPage } from "@/app/(pages)/app/(pages)/settings/(pages)/(main)/_components/form-page";

export default async function Page() {
  const session = await auth();

  return <FormPage defaultValues={session?.user} />;
}

import { FormPage } from "@/app/(pages)/app/_components/form-page";
import { auth } from "@/services/auth";

export default async function App() {
  const session = await auth();

  return <FormPage user={session?.user} />;
}

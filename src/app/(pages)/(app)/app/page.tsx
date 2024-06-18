import { FormPage } from "@/app/(pages)/(app)/app/_components/form-page";
import { auth } from "@/services/auth";

export default async function App() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <FormPage user={session?.user} />
    </main>
  );
}

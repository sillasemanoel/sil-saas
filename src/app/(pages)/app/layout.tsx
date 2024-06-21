import { FormLayout } from "@/app/(pages)/app/_components/form-layout";
import { auth } from "@/services/auth";

type Props = {
  children: React.ReactNode;
};

export default async function Layout(props: Props) {
  const session = await auth();

  return (
    <section className="grid grid-cols-[16rem_1fr]">
      <FormLayout user={session?.user} />
      {props.children}
    </section>
  );
}

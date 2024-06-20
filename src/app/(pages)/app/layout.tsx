import { FormLayout } from "@/app/(pages)/app/_components/form-layout";

type Props = {
  children: React.ReactNode;
};

export default async function Layout(props: Props) {
  return (
    <header className="grid grid-cols-[18rem_1fr]">
      <FormLayout />
      {props.children}
    </header>
  );
}

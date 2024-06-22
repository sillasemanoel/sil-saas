import { FormLayout } from "@/app/(pages)/app/(pages)/settings/_components/form-layout";

type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props) {
  return <FormLayout>{props.children}</FormLayout>;
}

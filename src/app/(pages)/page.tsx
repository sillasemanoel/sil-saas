import { FormNav } from "@/app/(pages)/_components/form-nav-page";
import { FormPage } from "@/app/(pages)/_components/form-main-page";

export default function RootPage() {
  return (
    <section>
      <FormNav />
      <FormPage />
    </section>
  );
}

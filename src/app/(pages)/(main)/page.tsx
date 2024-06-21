import { FormNavPage } from "@/app/(pages)/_components/form-nav-page";
import { FormPage } from "@/app/(pages)/(main)/_components/form-page";

export default function RootPage() {
  return (
    <section>
      <FormNavPage />
      <FormPage />
    </section>
  );
}

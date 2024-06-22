import { FormNavGlobalPage } from "@/app/(pages)/_components/form-nav-global-page";
import { FormPage } from "@/app/(pages)/(main)/_components/form-page";

export default function RootPage() {
  return (
    <section>
      <FormNavGlobalPage />
      <FormPage />
    </section>
  );
}

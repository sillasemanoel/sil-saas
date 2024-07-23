import { auth } from "@/services/auth";
import { NavDashboard } from "@/app/(pages)/(dashboard)/_components/nav-dashboard";
import { AsideDashboard } from "@/app/(pages)/(dashboard)/_components/aside-dashboard";
import { AsideSettings } from "@/app/(pages)/(dashboard)/settings/_components/aside-settings";

type Props = {
  children: React.ReactNode;
};

export default async function Settings(props: Props) {
  const session = await auth();

  return (
    <section>
      <NavDashboard user={session?.user} />
      <main className="grid lg:grid-cols-[14rem_1fr] h-screen pt-16 px-6 gap-6">
        <AsideDashboard />
        <div className="flex flex-col container max-w-full lg:max-w-screen-md !px-0 pb-6">
          <AsideSettings />
          {props.children}
        </div>
      </main>
    </section>
  );
}

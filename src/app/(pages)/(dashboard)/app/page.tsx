import { auth } from "@/services/auth";
import { NavDashboard } from "@/app/(pages)/(dashboard)/_components/nav-dashboard";
import { AsideDashboard } from "@/app/(pages)/(dashboard)/_components/aside-dashboard";
import { MainApp } from "@/app/(pages)/(dashboard)/app/_components/main-app";

export default async function App() {
  const session = await auth();

  return (
    <section>
      <NavDashboard user={session?.user} />
      <section className="grid lg:grid-cols-[14rem_1fr] h-screen pt-16 px-6 gap-6">
        <AsideDashboard />
        <MainApp />
      </section>
    </section>
  );
}

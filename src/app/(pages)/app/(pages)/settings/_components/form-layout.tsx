import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/custom/page";
import { SettingsSidebar } from "@/app/(pages)/app/(pages)/settings/_components/settings-sidebar";

type Props = {
  children: React.ReactNode;
};

export function FormLayout(props: Props) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-[10rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{props.children}</div>
          </div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}

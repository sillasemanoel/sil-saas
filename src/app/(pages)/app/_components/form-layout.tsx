"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import {
  DashboardSidebar,
  DashboardSidebarLogo,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarHeaderTitle,
  DashboardSidebarFooter,
} from "@/components/dashboard/sidebar";
import { UserDropdown } from "@/app/(pages)/app/_components/user-dropdown";
import { Session } from "next-auth";
import { Logo } from "@/components/dashboard/logo";

type Props = {
  user: Session["user"];
};

export function FormLayout({ user }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarLogo>
        <Logo href="/app" />
      </DashboardSidebarLogo>
      <DashboardSidebarMain>
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive("/app")}>
              <HomeIcon className="w-4 h-4" />
              Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={
                isActive("/app/settings") ||
                isActive("/app/settings/theme") ||
                isActive("/app/settings/billing")
              }
            >
              <MixerVerticalIcon className="w-4 h-4" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav>
          <DashboardSidebarHeader>
            <DashboardSidebarHeaderTitle>
              Links extras
            </DashboardSidebarHeaderTitle>
          </DashboardSidebarHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/help">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}

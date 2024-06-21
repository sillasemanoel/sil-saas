"use client";

import Link from "next/link";
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
        <Link
          href="/app"
          className="flex text-2xl font-bold tracking-tight scroll-m-20"
        >
          sil-
          <p className="text-[#dc2626]">saas/</p>
        </Link>
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

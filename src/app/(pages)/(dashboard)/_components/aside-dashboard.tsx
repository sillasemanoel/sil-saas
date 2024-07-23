"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import {
  DashboardSidebar,
  DashboardSidebarMain,
  DashboardSidebarMainLink,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarHeaderTitle,
} from "@/components/custom/sidebar";

export function AsideDashboard() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarMain>
        <DashboardSidebarMainLink href="/app" active={isActive("/app")}>
          <HomeIcon className="w-4 h-4" />
          App
        </DashboardSidebarMainLink>
        <DashboardSidebarMainLink
          href="/settings"
          active={
            isActive("/settings") ||
            isActive("/settings/theme") ||
            isActive("/settings/billing")
          }
        >
          <MixerVerticalIcon className="w-4 h-4" />
          Configurações
        </DashboardSidebarMainLink>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <DashboardSidebarHeader>
          <DashboardSidebarHeaderTitle>
            Links extras
          </DashboardSidebarHeaderTitle>
        </DashboardSidebarHeader>
        <DashboardSidebarMain>
          <DashboardSidebarMainLink href="/help">
            Precisa de ajuda?
          </DashboardSidebarMainLink>
          <DashboardSidebarMainLink href="/">Site</DashboardSidebarMainLink>
        </DashboardSidebarMain>
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}

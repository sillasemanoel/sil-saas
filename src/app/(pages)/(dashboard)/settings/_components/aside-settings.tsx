"use client";

import { usePathname } from "next/navigation";
import {
  DashboardSidebar,
  DashboardSidebarMain,
  DashboardSidebarMainLink,
} from "@/components/custom/sidebar";

export function AsideSettings() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar className="!flex !h-auto">
      <DashboardSidebarMain className="!flex-row justify-end !space-y-0 gap-1">
        <DashboardSidebarMainLink
          href="/settings"
          active={isActive("/settings")}
        >
          Meu perfil
        </DashboardSidebarMainLink>
        <DashboardSidebarMainLink
          href="/settings/billing"
          active={isActive("/settings/billing")}
        >
          Assinatura
        </DashboardSidebarMainLink>
      </DashboardSidebarMain>
    </DashboardSidebar>
  );
}

"use client";

import {
  Sidebar,
  SidebarLogo,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
  SidebarHeaderTitle,
  SidebarFooter,
} from "@/components/dashboard/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FormLayout() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Sidebar>
      <SidebarLogo>
        <Link
          href="/app"
          className="flex text-2xl font-bold tracking-tight scroll-m-20"
        >
          sil-
          <p className="text-[#dc2626] ">saas/</p>
        </Link>
      </SidebarLogo>
      <SidebarMain>
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app" active={isActive("/app")}>
              Tarefas
            </SidebarNavLink>
            <SidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav>
          <SidebarHeader>
            <SidebarHeaderTitle>Links extras</SidebarHeaderTitle>
          </SidebarHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/help">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <h1>User</h1>
      </SidebarFooter>
    </Sidebar>
  );
}

"use client";

import { Session } from "next-auth";
import { Logo } from "@/components/custom/logo";
import { DarkMode } from "@/app/(pages)/_components/dark-mode";
import { Profile } from "@/app/(pages)/(dashboard)/_components/@minor-components/profile";
import { LateralMenu } from "@/app/(pages)/(dashboard)/_components/@minor-components/lateral-menu";

interface Props {
  user: Session["user"] | undefined;
}

export function NavDashboard(props: Props) {
  return (
    <nav className="fixed flex items-center justify-between w-screen h-16 px-6 bg-background z-10">
      <div className="flex items-center gap-6">
        <Logo href="/app" />
      </div>
      <div className="flex items-center gap-1">
        <Profile user={props.user} />
        <DarkMode />
        <div className="lg:hidden">
          <LateralMenu />
        </div>
      </div>
    </nav>
  );
}

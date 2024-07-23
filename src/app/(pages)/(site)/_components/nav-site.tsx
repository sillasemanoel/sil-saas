"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import { DarkMode } from "@/app/(pages)/_components/dark-mode";
import { MenuNavigation } from "@/app/(pages)/(site)/_components/@minor-components/menu-navigation";
import { Profile } from "@/app/(pages)/(site)/_components/@minor-components/profile";
import { LateralMenu } from "@/app/(pages)/(site)/_components/@minor-components/lateral-menu";

interface Props {
  isAuthenticated: boolean;
  user: Session["user"] | undefined;
}

export function NavSite(props: Props) {
  return (
    <nav className="fixed flex items-center justify-between w-screen h-16 px-6 bg-background z-10">
      <div className="flex items-center gap-6">
        <Logo href="/" />
        <MenuNavigation />
      </div>
      <div className="flex items-center gap-1">
        {!props.isAuthenticated ? (
          <div className="hidden lg:flex items-center gap-5">
            <Button variant="link" asChild>
              <Link href="/auth">Fazer login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth">Registre-se gratuitamente</Link>
            </Button>
          </div>
        ) : (
          <Profile user={props.user} />
        )}
        <DarkMode />
        <div className="lg:hidden">
          <LateralMenu isAuthenticated={props.isAuthenticated} />
        </div>
      </div>
    </nav>
  );
}

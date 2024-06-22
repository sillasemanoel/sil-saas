"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/custom/logo";
import { CustomNavigationMenu } from "@/app/(pages)/_components/navigation-menu";
import { CustomSheet } from "@/app/(pages)/_components/sheet";
import { CustomDeveloper } from "@/app/(pages)/_components/develope";

export function GlobalFormPage() {
  return (
    <nav className="fixed z-10 flex h-16 w-screen items-center justify-between px-7 bg-white dark:bg-[#0c0a09]">
      <div className="flex items-center gap-5">
        <Logo href="/" />
        <CustomNavigationMenu />
      </div>
      <div className="flex items-center">
        <div className="hidden lg:block items-center space-x-5">
          <Link href="/auth">
            <Button variant="link">Fazer login</Button>
          </Link>
          <Link href="/auth">
            <Button>Registre-se gratuitamente</Button>
          </Link>
        </div>
        <div className="block flex-row lg:hidden">
          <CustomSheet />
        </div>
      </div>
      <CustomDeveloper />
    </nav>
  );
}

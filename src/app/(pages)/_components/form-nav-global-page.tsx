"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/dashboard/logo";
import { CustomNavigationMenu } from "@/app/(pages)/_components/navigation-menu";
import { CustomSheet } from "@/app/(pages)/_components/sheet";
import { CustomDeveloper } from "@/app/(pages)/_components/develope";

export function FormNavGlobalPage() {
  return (
    <nav className="fixed z-100 flex h-16 w-screen items-center justify-between px-7">
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

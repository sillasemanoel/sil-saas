"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tarefas",
    href: "/products/task",
    description: "Organize sua lista de tarefas.",
  },
];

export function FormNav() {
  return (
    <nav className="fixed z-100 flex h-[60px] w-screen items-center justify-between px-7">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#dc2626] scroll-m-20"
        >
          sil-saas/
        </Link>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Produtos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] grid-cols-1 gap-3 p-4">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <p className="text-base">{component.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" className="text-base">
                <Button variant="ghost" className="text-base">
                  Preços
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden lg:block items-center gap-3">
          <Link href="/auth">
            <Button variant="link" className="text-base text-black">
              Fazer login
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="text-base">Registre-se gratuitamente</Button>
          </Link>
        </div>
        <div className="block flex-row lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-9 items-center justify-center p-0"
              >
                <TextAlignJustifyIcon className="h-[23px] w-[23px] rotate-0 scale-100" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Link
                    href="/"
                    className="text-base font-semibold hover:underline"
                  >
                    Início
                  </Link>
                </div>
                <Separator />
                <SheetHeader>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-base font-semibold">
                        Produtos
                      </AccordionTrigger>
                      {components.map((component) => (
                        <AccordionContent key={component.title}>
                          <Link
                            href={component.href}
                            className="flex flex-col items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <p className="text-base">{component.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {component.description}
                            </p>
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </SheetHeader>
                <div className="mt-4">
                  <Link
                    href="/pricing"
                    className="text-base font-semibold hover:underline"
                  >
                    Preços
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Link href="/auth" className="w-full">
                  <Button className="w-full text-base">
                    Registre-se gratuitamente
                  </Button>
                </Link>
                <Link href="/auth" className="w-full">
                  <Button variant="outline" className="w-full text-base">
                    Fazer login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="fixed bottom-2 right-2">
        <p className="flex items-center gap-1 text-base">
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/sillas-emanoel-656478218/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Button variant="link" className="p-0 text-base font-semibold">
              Sillas Emanoel
            </Button>
            <Image
              src="/images/profile.png"
              width={698}
              height={698}
              alt="Picture of the author"
              priority
              className="w-7 rounded-md"
            />
          </a>
        </p>
      </div>
    </nav>
  );
}

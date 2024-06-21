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
    <nav className="fixed z-100 flex h-16 w-screen items-center justify-between px-7">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="flex text-2xl font-bold tracking-tight scroll-m-20"
        >
          sil-
          <p className="text-[#dc2626] ">saas/</p>
        </Link>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="ghost">Início</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[18rem] grid-cols-1 gap-3 p-4">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <p>{component.title}</p>
                          <p className="text-xs text-muted-foreground">
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
              <Link href="/pricing">
                <Button variant="ghost">Preços</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center">
        <div className="hidden lg:block items-center space-x-3">
          <Link href="/auth">
            <Button variant="link" className="text-[#0a0a0a] dark:text-white">
              Fazer login
            </Button>
          </Link>
          <Link href="/auth">
            <Button>Registre-se gratuitamente</Button>
          </Link>
        </div>
        <div className="block flex-row lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-9 items-center justify-center p-0"
              >
                <TextAlignJustifyIcon className="h-[1.75rem] w-[1.75rem] rotate-0 scale-100" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <div>
                <div className="my-4">
                  <Link href="/" className="font-semibold hover:underline">
                    Início
                  </Link>
                </div>
                <Separator />
                <SheetHeader>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className=" font-semibold">
                        Produtos
                      </AccordionTrigger>
                      {components.map((component) => (
                        <AccordionContent key={component.title}>
                          <Link
                            href={component.href}
                            className="flex flex-col items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <p>{component.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {component.description}
                            </p>
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </SheetHeader>
                <div className="my-4">
                  <Link
                    href="/pricing"
                    className="font-semibold hover:underline"
                  >
                    Preços
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Link href="/auth" className="w-full">
                  <Button className="w-full ">Registre-se gratuitamente</Button>
                </Link>
                <Link href="/auth" className="w-full">
                  <Button variant="outline" className="w-full ">
                    Fazer login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="fixed bottom-2 right-2">
        <p className="flex items-center gap-1">
          Desenvolvido por{" "}
          <a
            href="https://portfolio-ashy-six-85.vercel.app"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Button variant="link" className="p-0 font-semibold">
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

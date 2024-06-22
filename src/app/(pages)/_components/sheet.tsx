import React from "react";
import Link from "next/link";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
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
import { components } from "@/app/(pages)/_utils/products";

export function CustomSheet() {
  return (
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
                      <p className="text-sm">{component.title}</p>
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
            <Link href="/pricing" className="font-semibold hover:underline">
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
  );
}

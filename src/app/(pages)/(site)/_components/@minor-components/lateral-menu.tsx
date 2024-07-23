import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { resources } from "@/app/(pages)/(site)/_utils/resources";

type Props = {
  isAuthenticated: boolean;
};

export function LateralMenu(props: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-9 items-center justify-center p-0"
        >
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div>
          <ul>
            <li className="my-4">
              <Link href="/" className="font-semibold hover:underline">
                Início
              </Link>
            </li>
            <Separator />
            <li className="my-4">
              <Link href="/pricing" className="font-semibold hover:underline">
                Preços
              </Link>
            </li>
            <Separator />
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="font-semibold">
                    Recursos
                  </AccordionTrigger>
                  <ul className="grid grid-cols-1 gap-1">
                    {resources.map((component) => (
                      <li key={component.title}>
                        <AccordionContent className="!pb-0" asChild>
                          <Link
                            href={component.href}
                            className="flex flex-col select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <span className="text-sm">{component.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {component.description}
                            </span>
                          </Link>
                        </AccordionContent>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
        {!props.isAuthenticated ? (
          <SheetFooter className="!flex-col gap-3">
            <Link href="/auth" className="w-full">
              <Button className="w-full ">Registre-se gratuitamente</Button>
            </Link>
            <Link href="/auth" className="w-full !mx-0">
              <Button variant="outline" className="w-full ">
                Fazer login
              </Button>
            </Link>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

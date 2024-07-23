import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function LateralMenu() {
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
        <ul>
          <li className="my-4">
            <Link href="/app" className="font-semibold hover:underline">
              App
            </Link>
          </li>
          <Separator />
          <li className="my-4">
            <Link href="/settings" className="font-semibold hover:underline">
              Configurações
            </Link>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <ul className="w-full">
              <li className="my-4">
                <Link href="/help" className="font-semibold hover:underline">
                  Precisa de ajuda?
                </Link>
              </li>
              <Separator />
              <li className="my-4">
                <Link href="/" className="font-semibold hover:underline">
                  Site
                </Link>
              </li>
            </ul>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

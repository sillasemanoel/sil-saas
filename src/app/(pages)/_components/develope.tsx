import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CustomDeveloper() {
  return (
    <div className="fixed bottom-2 right-2">
      <p className="flex items-center gap-1">
        Desenvolvido por{" "}
        <Link
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
        </Link>
      </p>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Developer() {
  return (
    <footer className="fixed bottom-6 right-6">
      <span className="flex items-center h-6 gap-1">
        <span className="text-sm">Desenvolvido por</span>
        <Link
          href="https://portfolio-ashy-six-85.vercel.app"
          target="_blank"
          className="flex items-center h-6 gap-1"
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
            className="w-6 rounded-md"
          />
        </Link>
      </span>
    </footer>
  );
}

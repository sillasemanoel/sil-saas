import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
};

export function Logo(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex items-center gap-2 text-xl font-bold"
    >
      <Image
        src="/favicon.ico"
        width={160}
        height={160}
        alt="Picture of the author"
        className="w-7"
        priority
      />
      <span>sil-saas/</span>
    </Link>
  );
}

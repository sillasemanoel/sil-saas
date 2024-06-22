import Link from "next/link";

type Props = {
  href: string;
};

export function Logo(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex text-2xl font-bold tracking-tight scroll-m-20 text-[#e11d48]"
    >
      sil-saas/
    </Link>
  );
}

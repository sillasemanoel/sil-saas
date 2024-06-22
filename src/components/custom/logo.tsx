import Link from "next/link";

type Props = {
  href: string;
};

export function Logo(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex text-2xl text-[#1c1917] dark:text-white font-bold tracking-tight scroll-m-20"
    >
      sil-saas/
    </Link>
  );
}

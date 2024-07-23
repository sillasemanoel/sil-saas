import Link from "next/link";
import { cn } from "@/lib/utils";

export type Props<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardSidebar(props: Props) {
  return (
    <aside
      className={cn([
        "hidden lg:flex flex-col justify-between h-full pb-6",
        props.className,
      ])}
    >
      {props.children}
    </aside>
  );
}

export function DashboardSidebarMain(props: Props) {
  return (
    <div className={cn(["flex flex-col gap-1", props.className])}>
      {props.children}
    </div>
  );
}

export function DashboardSidebarHeader(props: Props) {
  return (
    <div className={cn(["px-3 py-2", props.className])}>{props.children}</div>
  );
}

export function DashboardSidebarHeaderTitle(props: Props) {
  return (
    <span className={cn(["font-bold text-xs uppercase", props.className])}>
      {props.children}
    </span>
  );
}

type DashboardSidebarMainLinkProps = {
  href: string;
  active?: boolean;
};

export function DashboardSidebarMainLink(
  props: Props<DashboardSidebarMainLinkProps>
) {
  return (
    <Link
      href={props.href}
      className={cn([
        "flex gap-2 rounded-md items-center px-3 py-2 font-medium hover:bg-accent",
        props.active && "bg-primary hover:bg-primary text-primary-foreground",
        props.className,
      ])}
    >
      {props.children}
    </Link>
  );
}

export function DashboardSidebarFooter(props: Props) {
  return (
    <div
      className={cn([
        "flex flex-none flex-col justify-center",
        props.className,
      ])}
    >
      {props.children}
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

export type DashboardSidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardSidebar(props: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn([
        "h-screen font-medium border-r border-border flex flex-col",
        props.className,
      ])}
    >
      {props.children}
    </aside>
  );
}

export function DashboardSidebarLogo(props: DashboardSidebarGenericProps) {
  return (
    <nav
      className={cn([
        "flex flex-none items-center border-b border-border h-16 px-7",
        props.className,
      ])}
    >
      {props.children}
    </nav>
  );
}

export function DashboardSidebarMain(props: DashboardSidebarGenericProps) {
  return (
    <main
      className={cn([
        "flex flex-col justify-between h-full p-4",
        props.className,
      ])}
    >
      {props.children}
    </main>
  );
}

export function DashboardSidebarHeader(props: DashboardSidebarGenericProps) {
  return (
    <div className={cn(["px-3 py-2", props.className])}>{props.children}</div>
  );
}

export function DashboardSidebarHeaderTitle(
  props: DashboardSidebarGenericProps
) {
  return (
    <p
      className={cn([
        "text-xs uppercase text-muted-foreground",
        props.className,
      ])}
    >
      {props.children}
    </p>
  );
}

export function DashboardSidebarNav(props: DashboardSidebarGenericProps) {
  return <div className={cn(["", props.className])}>{props.children}</div>;
}

export function DashboardSidebarNavMain(props: DashboardSidebarGenericProps) {
  return (
    <div className={cn(["h-full flex flex-col", props.className])}>
      {props.children}
    </div>
  );
}

type DashboardSidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function DashboardSidebarNavLink(
  props: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>
) {
  return (
    <Link
      href={props.href}
      className={cn([
        "flex gap-2 rounded-md items-center px-3 py-2",
        props.active && "bg-accent",
        props.className,
      ])}
    >
      {props.children}
    </Link>
  );
}

export function DashboardSidebarFooter(props: DashboardSidebarGenericProps) {
  return (
    <footer
      className={cn([
        "flex flex-none h-20 items-center justify-center border-t border-border",
        props.className,
      ])}
    >
      {props.children}
    </footer>
  );
}

/*

import Link from "next/link";

type Props = {
  paths: Array<{
    label: string;
    href: string;
  }>;
};

export function Sidebar(props: Props) {
  return (
    <aside className="border-r border-border">
      <nav>
        {props.paths.map((path) => (
          <Link key={path.href} href={path.href}>
            {path.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


*/

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function Sidebar(props: SidebarGenericProps) {
  return (
    <aside
      className={cn([
        "text-base font-medium border-r border-border flex flex-col",
        props.className,
      ])}
    >
      {props.children}
    </aside>
  );
}

export function SidebarLogo(props: SidebarGenericProps) {
  return (
    <nav
      className={cn(["flex flex-none h-16 items-center px-7", props.className])}
    >
      {props.children}
    </nav>
  );
}

export function SidebarMain(props: SidebarGenericProps) {
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

export function SidebarHeader(props: SidebarGenericProps) {
  return (
    <div className={cn(["px-3 py-2", props.className])}>{props.children}</div>
  );
}

export function SidebarHeaderTitle(props: SidebarGenericProps) {
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

export function SidebarNav(props: SidebarGenericProps) {
  return <div className={cn(["", props.className])}>{props.children}</div>;
}

export function SidebarNavMain(props: SidebarGenericProps) {
  return (
    <div className={cn(["h-full flex flex-col", props.className])}>
      {props.children}
    </div>
  );
}

type SidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function SidebarNavLink(
  props: SidebarGenericProps<SidebarNavLinkProps>
) {
  return (
    <Link
      href={props.href}
      className={cn([
        "px-3 py-2",
        props.active && "bg-accent rounded-md",
        props.className,
      ])}
    >
      {props.children}
    </Link>
  );
}

export function SidebarFooter(props: SidebarGenericProps) {
  return (
    <footer
      className={cn([
        "flex flex-none h-16 items-center px-7 border-t border-border",
        props.className,
      ])}
    >
      {props.children}
    </footer>
  );
}

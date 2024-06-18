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

export function SidebarHeader(props: SidebarGenericProps) {
  return (
    <header className={cn(["px-7 py-[14px]", props.className])}>
      {props.children}
    </header>
  );
}

export function SidebarHeaderTitle(props: SidebarGenericProps) {
  return (
    <p
      className={cn([
        "text-xs uppercase text-muted-foreground -ml-4",
        props.className,
      ])}
    >
      {props.children}
    </p>
  );
}

export function SidebarMain(props: SidebarGenericProps) {
  return (
    <main
      className={cn([
        "flex flex-col justify-between h-full px-3 py-5",
        props.className,
      ])}
    >
      {props.children}
    </main>
  );
}

export function SidebarNav(props: SidebarGenericProps) {
  return <nav className={cn(["", props.className])}>{props.children}</nav>;
}

export function SidebarNavHeader(props: SidebarGenericProps) {
  return (
    <header className={cn(["", props.className])}>{props.children}</header>
  );
}

export function SidebarNavHeaderTitle(props: SidebarGenericProps) {
  return <p className={cn(["", props.className])}>{props.children}</p>;
}

export function SidebarNavMain(props: SidebarGenericProps) {
  return (
    <main className={cn(["h-full flex flex-col", props.className])}>
      {props.children}
    </main>
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
        "text-sm px-3 py-2",
        props.active && "bg-secondary rounded-sm",
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
        "px-7 py-5 mt-auto border-t border-border",
        props.className,
      ])}
    >
      {props.children}
    </footer>
  );
}

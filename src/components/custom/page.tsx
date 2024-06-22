import { cn } from "@/lib/utils";

export type DashboardPageGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardPage(props: DashboardPageGenericProps) {
  return (
    <main className={cn(["h-screen", props.className])}>{props.children}</main>
  );
}

export function DashboardPageHeader(props: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        "flex flex-none justify-between items-center border-b border-border h-16 px-7",
        props.className,
      ])}
    >
      {props.children}
    </header>
  );
}

export function DashboardPageHeaderTitle(props: DashboardPageGenericProps) {
  return (
    <p
      className={cn([
        "text-base text-muted-foreground uppercase",
        props.className,
      ])}
    >
      {props.children}
    </p>
  );
}

export function DashboardPageHeaderNav(props: DashboardPageGenericProps) {
  return <nav className={cn(["", props.className])}>{props.children}</nav>;
}

export function DashboardPageMain(props: DashboardPageGenericProps) {
  return <main className={cn(["p-7", props.className])}>{props.children}</main>;
}

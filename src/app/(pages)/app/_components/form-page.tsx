"use client";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

type Props = {
  user: Session["user"];
};

export function FormPage({ user }: Props) {
  if (!user) return null;

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-3">
        <Avatar>
          <AvatarFallback>sil-saas/</AvatarFallback>
        </Avatar>
        <p>{user.email}</p>
        <Button onClick={() => signOut()} className="text-base">
          Sair
        </Button>
      </div>
    </main>
  );
}

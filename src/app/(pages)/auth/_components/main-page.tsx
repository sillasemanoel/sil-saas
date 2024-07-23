"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().email({
    message: "Formato de email inválido",
  }),
});

export function MainAuth() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await signIn("nodemailer", { email: data.email, redirect: false });
      toast({
        title: "Link mágico enviado",
        description:
          "Verifique seu e-mail para obter o link mágico e fazer login.",
      });
    } catch {
      console.log("Deu erro chibatona!");
      toast({
        title: "Erro",
        description: "Um erro ocorreu. Por favor, tente novamente.",
      });
    }
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <Card className="flex w-full max-w-md flex-col">
        <div className="flex w-full justify-end px-3 pt-3 -mb-6">
          <Link href="/">
            <Cross1Icon className="h-[13px] w-[13px] rotate-0 scale-100 text-stone-600 hover:text-black" />
          </Link>
        </div>
        <CardHeader className="gap-2">
          <CardTitle className="text-3xl font-bold">Link mágico</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Depois de inserir seu e-mail, enviaremos um link de login seguro que
            você poderá usar para acessar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex h-4 items-center justify-between">
                      <FormLabel>E-mail</FormLabel>
                      <FormMessage className="p-0" />
                    </div>
                    <FormControl>
                      <Input placeholder="s@example.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-3 w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

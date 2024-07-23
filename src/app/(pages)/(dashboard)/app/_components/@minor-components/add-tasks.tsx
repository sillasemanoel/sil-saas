"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { AddTodo } from "@/app/(pages)/(dashboard)/app/_actions/action";

const FormSchema = z.object({
  title: z.string().nonempty({ message: "Título não pode estar vazio" }),
});

export function AddTasks() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await AddTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Sucesso",
      description: "Sua tarefa foi inserida com sucesso.",
    });
  });

  return (
    <div className="flex justify-end w-full">
      <Sheet>
        <SheetTrigger asChild>
          <div ref={ref} className="w-[10.4rem]">
            <Button>
              <PlusIcon className="w-4 h-4 mr-3" />
              Adicionar tarefa
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8 h-screen">
              <SheetHeader className="!text-left">
                <SheetTitle>Inserir tarefas</SheetTitle>
                <SheetDescription>
                  Adicione seu item de tarefa aqui. Clique em salvar quando
                  terminar.
                </SheetDescription>
              </SheetHeader>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex h-4 items-center justify-between">
                      <FormLabel>Título</FormLabel>
                      <FormMessage className="p-0" />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Digite o título da sua tarefa"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este será o nome exibido publicamente para a tarefa.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <SheetFooter className="mt-auto">
                <Button disabled={form.formState.isSubmitting} type="submit">
                  {form.formState.isSubmitting
                    ? "Adicionando..."
                    : "Adicionar tarefa"}
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

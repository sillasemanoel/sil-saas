"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRef } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "@/app/(pages)/app/(pages)/(main)/_types/type";
import { upsertTodo } from "@/app/(pages)/app/(pages)/(main)/_actions/action";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  title: z.string().nonempty({ message: "Título não pode estar vazio" }),
});

type TodoUpsertSheetProps = {
  children?: React.ReactNode;
  defaultValue?: Todo;
};

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Sucesso",
      description: "Sua tarefa foi atualizada com sucesso.",
    });
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Inserir tarefas</SheetTitle>
              <SheetDescription>
                Adicione ou edite seu item de tarefa aqui. Clique em salvar
                quando terminar.
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
              <Button type="submit">Salvar alterações</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

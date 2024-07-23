import { ReturnTypeWithoutPromise } from "@/types/return-type-without-promise";
import { getUserTodos } from "@/app/(pages)/(dashboard)/app/_actions/action";

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0];

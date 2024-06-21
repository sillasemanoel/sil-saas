import { ReturnTypeWithoutPromise } from "@/types/return-type-without-promise";
import { getUserTodos } from "@/app/(pages)/app/(pages)/actions";

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0];

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/custom/page";
import { TodoDataTable } from "@/app/(pages)/app/(pages)/(main)/_components/todo-data-table-page";
import { TodoUpsertSheet } from "@/app/(pages)/app/(pages)/(main)/_components/todo-upsert-sheet-page";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { getUserTodos } from "@/app/(pages)/app/(pages)/(main)/_actions/action";

export async function FormMain() {
  const todos = await getUserTodos();

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <TodoUpsertSheet>
              <Button variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-3" />
                Adicionar tarefa
              </Button>
            </TodoUpsertSheet>
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  );
}

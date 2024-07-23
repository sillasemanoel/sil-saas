import { getUserTodos } from "@/app/(pages)/(dashboard)/app/_actions/action";
import { AddTasks } from "@/app/(pages)/(dashboard)/app/_components/@minor-components/add-tasks";
import { TaskTable } from "@/app/(pages)/(dashboard)/app/_components/@minor-components/task-table";

export async function MainApp() {
  const todos = await getUserTodos();

  return (
    <main className="w-full flex flex-col gap-6 pb-6">
      <AddTasks />
      <TaskTable data={todos} />
    </main>
  );
}

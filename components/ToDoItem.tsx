import { TrashIcon } from "@heroicons/react/16/solid";
import type { ToDo } from "@/types/todo";

interface ToDoItemProps {
  todo: ToDo;
  onRemove: (id: string) => void;
}

export default function ToDoItem({ todo, onRemove }: ToDoItemProps) {
  return (
    <div
      id={todo.id}
      className="flex justify-between items-center bg-emerald-500 p-2 rounded-lg mb-4"
    >
      <label className="mr-4">{todo.text}</label>
      <TrashIcon className="w-4 cursor-pointer" onClick={() => onRemove(todo.id)} />
    </div>
  );
}

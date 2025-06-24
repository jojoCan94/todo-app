import { TrashIcon } from "@heroicons/react/16/solid";
import { ToDo } from "./ToDoList";

export default function ToDoItem(props: { todoInput: ToDo; onRemove: (id: string) => void }) {
    return (
        <div className="flex justify-between items-center bg-white border border-gray-200 shadow-sm px-4 py-3 rounded-lg text-gray-800">
            <span className="truncate">{props.todoInput.text}</span>
            <button
                onClick={() => props.onRemove(props.todoInput.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Elimina"
            >
                <TrashIcon className="w-5 h-5" />
            </button>
        </div>
    );
}

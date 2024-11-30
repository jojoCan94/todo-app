import { TrashIcon } from "@heroicons/react/16/solid";
import { ToDo } from "./ToDoList";

export default function ToDoItem(props:{todoInput: ToDo, onRemove: (id: string) => void}) {
    return (
        <div id={props.todoInput.id} className="flex justify-between items-center bg-emerald-500 p-2 rounded-lg mb-4">
            <label className="mr-4">{props.todoInput.text}</label> <TrashIcon className="w-4" onClick={() => props.onRemove(props.todoInput.id)}/>
        </div>
    )
}
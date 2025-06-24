"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";
import { getDevTodos } from "./dev-todos";

export interface ToDo {
    id: string;
    text: string;
}

export default function ToDoList(props: { todoInput: string }) {
    const [toDoItems, setToDoItems] = useState<ToDo[]>([]);

    useEffect(() => {
        if (process.env.NODE_ENV === "development" && toDoItems.length === 0) {
            setToDoItems(getDevTodos());
        }
    }, []);

    const onRemove = (idItem: string) => {
        setToDoItems((prevItems) => prevItems.filter((item) => item.id !== idItem));
    };

    useEffect(() => {
        if (props.todoInput) {
            const newToDo = {
                id: uuidv4(),
                text: props.todoInput.trim(),
            };
            setToDoItems((prevItems) => [...prevItems, newToDo]);
        }
    }, [props.todoInput]);

    return (
        <div className="space-y-2 mt-4">
            {toDoItems.map((item) => (
                <ToDoItem key={item.id} todoInput={item} onRemove={onRemove} />
            ))}
        </div>
    );
}

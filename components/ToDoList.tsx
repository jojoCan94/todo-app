"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";
export interface ToDo {
    id: string;
    text: string;
  }

export default function ToDoList(props: {todoInput: string}) {
    const [toDoItems, setToDoItems] = useState<ToDo[]>([])

    const onRemove = (idItem: string) => {
        setToDoItems((prevItems) => prevItems.filter((item) => item.id !== idItem));
    }

    useEffect(() => {
        if(props.todoInput) {
            const newToDo = {
                id: uuidv4(),
                text: props.todoInput,
            };
            setToDoItems((prevItems) => [...prevItems, newToDo]);
        }
    }, [props.todoInput]);
    return (
        <div>
            {toDoItems.map((item) => (
                <ToDoItem key={item.id} todoInput={item} onRemove={onRemove}/>
            ))}           
        </div>
        
    )
}
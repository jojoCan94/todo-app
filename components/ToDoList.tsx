"use client";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props: {todoInput: string}) {
    const [toDoItems, setToDoItems] = useState<string[]>([])

    useEffect(() => {
        if(props.todoInput) {
            setToDoItems((prevItems) => [...prevItems, props.todoInput]);
        }
    }, [props.todoInput]);
    return (
        <div>
            {toDoItems.map((item, index) => (
                <ToDoItem key={index} todoInput={item}/>
            ))}           
        </div>
    )
}
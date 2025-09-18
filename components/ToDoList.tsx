"use client";
import ToDoItem from "./ToDoItem";
import type { ToDo } from "@/types/todo";

interface ToDoListProps {
  items: ToDo[];
  onRemove: (id: string) => void;
}

export default function ToDoList({ items, onRemove }: ToDoListProps) {
  return (
    <div>
      {items.map((item) => (
        <ToDoItem key={item.id} todo={item} onRemove={onRemove} />
      ))}
    </div>
  );
}

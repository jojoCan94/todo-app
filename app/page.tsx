"use client";
import ToDoList from "@/components/ToDoList";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { ToDo } from "@/types/todo";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<ToDo[]>([]);

  const handleAddItem = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      {
        id: uuidv4(),
        text: trimmed,
      },
    ]);
    setText("");
  }, []);

  const handleEnterKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddItem(text);
      }
    },
    [handleAddItem, text],
  );

  const handleRemove = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-[1.6rem] md:text-[3rem] lg:text-[5rem] flex-none mt-10">
        <h1>Aggiungi un compito da fare</h1>
      </div>
      <div className="flex flex-initial w-full justify-center max-w-md px-4 m-16">
        <input
          className="shadow appearance-none border rounded py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="AskTask"
          type="text"
          placeholder="Ask a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 sm:mt-0"
          onClick={() => handleAddItem(text)}
          type="button"
        >
          Add
        </button>
      </div>
      <div>
        <ToDoList items={items} onRemove={handleRemove} />
      </div>
    </div>
  );
}

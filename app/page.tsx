"use client";
import ToDoList from "@/components/ToDoList";
import { useState } from "react";

const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>, text: string, setItem: (item: string) => void, setText: (text: string) => void) => {
  if (e.key === "Enter") {
    setItem(text);
    setText("");
  }
};


export default function Home() {
  const [text, setText] = useState<string>("");
  const [item, setItem] = useState<string>("");

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
          onKeyDown={(e) => handleEnterKey(e, text, setItem, setText)}
        />
        <button
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 sm:mt-0"
          onClick={() => {
            setItem(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ToDoList todoInput={item} />
      </div>
    </div>
  );
}

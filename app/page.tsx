"use client";
import ToDoList from "@/components/ToDoList";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [item, setItem] = useState<string>("");

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-[5rem]">
        <h1>Aggiungi un compito da fare</h1>
      </div>
      <div className="flex p-8 w-[50rem]">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="w-[10rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setItem(text)}
        >
          ADD
        </button>
      </div>
      <div>
        <ToDoList todoInput={item} />
      </div>
    </div>
  );
}

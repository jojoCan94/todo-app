"use client";
import ToDoList from "@/components/ToDoList";
import { useState } from "react";

const handleEnterKey = (
  e: React.KeyboardEvent<HTMLInputElement>,
  text: string,
  setItem: (item: string) => void,
  setText: (text: string) => void
) => {
  if (e.key === "Enter") {
    setItem(text);
    setText("");
  }
};

export default function Home() {
  const [text, setText] = useState<string>("");
  const [item, setItem] = useState<string>("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 font-sans">
          Aggiungi un compito da fare
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            id="AskTask"
            type="text"
            placeholder="Scrivi qualcosa da fare..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => handleEnterKey(e, text, setItem, setText)}
          />

          <button
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-3 rounded-lg transition"
            onClick={() => {
              setItem(text);
              setText("");
            }}
          >
            Aggiungi
          </button>
        </div>

        <ToDoList todoInput={item} />
      </div>
    </div>
  );
}

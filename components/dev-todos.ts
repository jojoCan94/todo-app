import { v4 as uuidv4 } from "uuid";
import type { ToDo } from "./ToDoList";

export function getDevTodos(): ToDo[] {
  return [
    { id: uuidv4(), text: "Comprare il latte" },
    { id: uuidv4(), text: "Mandare l’email al cliente" },
    { id: uuidv4(), text: "Finire il componente ToDoItem" },
    { id: uuidv4(), text: "Fare una pausa caffè (importantissimo)" },
    { id: uuidv4(), text: "Aggiornare README del progetto" },
  ];
}

import ToDoItem from "./ToDoItem";

export default function ToDoList(props: {todoInput: string}) {
    return (
        <div>
            <ToDoItem todoInput={props.todoInput}/>
        </div>
    )
}
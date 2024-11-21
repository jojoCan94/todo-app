export default function ToDoItem(props:{todoInput: string}) {
    return (
        <div>
            <label>{props.todoInput}</label>
        </div>
    )
}
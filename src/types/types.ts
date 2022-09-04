export type AddTodo = (newTodo: string) => void


export type Todo = {
    id: number
    text: string
    complete: boolean
}

export interface TodoListItemProps{
    todo:Todo;
    toggleComplete: ToggleComplete;
    toggleDelete: ToggleDelete;
}
export interface TodoFormProps{
    addTodo: AddTodo;
}
export interface TodoListProps { 
    todos:Array<Todo>;
    toggleComplete: ToggleComplete
    toggleDelete: ToggleDelete
}
export type ToggleComplete = (selectedTodo: Todo) => void

export type ToggleDelete = (deleteTodo: Todo) => void
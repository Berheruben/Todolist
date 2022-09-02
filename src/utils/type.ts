export type AddTodo = (newTodo: string) => void

export type Todo = {
text:String;
complete: boolean;
};
export interface TodoListItemProps{
    todo:Todo;
    toggleComplete: ToggleComplete;
}
export interface TodoFormProps{
    addTodo: AddTodo;
}
export type ToggleComplete = (selectedTodo: Todo) => void
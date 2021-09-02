type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Todo = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
}
//todo.completed

const todo2: Todo = updateTodo(todo, { completed: true });
console.log(todo2);

//Pick
type TodoPreview = Pick<Todo, "title" | "description">
 
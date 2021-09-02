//Readonly
//Partial
//Pick
//Omit

type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
}
//todo.completed = true;
//partial deixa todas as propriedades em T opcional
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate};
}

const todo2: Todo = updateTodo(todo, { completed: true });
console.log(todo2);

//Pick
//pega do todo as propriedades title e descipstion
type TodoPreview = Pick<Todo, "title" | "completed">
 
const todo3: TodoPreview = {
  title: "Fechart Ghost of Tsushima",
  completed: false
}

//// Omit
type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPreview = {
  title: "Fechart Ghost of Tsushima",
  completed: false
}

//quando usar o pick e o omit?
//pensar:
//eu quero anular mais ou pegar?
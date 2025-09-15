import z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

const getStats = (todos: Todo[]) => ({
  length: todos.length,
  completed: todos.filter((todo) => todo.completed).length,
  pending: todos.filter((todo) => !todo.completed).length,
});

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoScheme = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStatecheme = z.object({
  todos: z.array(TodoScheme),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTaskInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("task-state");

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  //Validar mediante un zod
  const result = TaskStatecheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  //!el objeto puede haber sido manipulado
  return result.data;
};

//Un reducer no es mas que una funcion pura que debe regresar un estado
export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      const updateTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: updateTodos,
        ...getStats(updateTodos),
      };
    }
    case "DELETE_TODO": {
      const updateTodos = state.todos.filter(
        (todo) => todo.id != action.payload,
      );
      return {
        ...state,
        todos: updateTodos,
        ...getStats(updateTodos),
      };
    }
    case "TOGGLE_TODO": {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
        ...getStats(updateTodos),
      };
    }

    default:
      return state;
  }
};

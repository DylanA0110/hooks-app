interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TaskState{
    todos:Todo[];
    length:number;
    completed:number;
    pending:number;
}

export type TaskAction = 
| {type:'ADD_TODO', payload:string}
| {type:'TOGGLE_TODO', payload:number}
| {type:'DELETE_TODO', payload:number}

//Un reducer no es mas que una funcion pura que debe regresar un estado
export const taskReducer = (
    state:TaskState, 
    action:TaskAction
):TaskState =>{
    
    switch(action.type){

        case 'ADD_TODO':{
        const newTodo:Todo = {
            id:Date.now(),
            text:action.payload.trim(),
            completed:false,
        }

        const updateTodos = [...state.todos,newTodo]

        return {
            ...state,
            completed:updateTodos.filter(todo=>todo.completed ).length,
            pending:updateTodos.filter(todo=>!todo.completed).length,
            todos:updateTodos,
            length:updateTodos.length
        };

        }
        case 'DELETE_TODO':{
            
            const updateTodo = state.todos.filter((todo) => todo.id != action.payload)
            return {
                ...state,
                completed:updateTodo.filter(todo=>todo.completed).length,
                pending:updateTodo.filter(todo=>!todo.completed).length,
                todos: updateTodo,
                length:updateTodo.length,
            }
        }
        case 'TOGGLE_TODO':{

        const updateTodos = state.todos.map(todo =>{
        if(todo.id === action.payload)
        {
            return {...todo, completed: !todo.completed}
        }
        return todo;
        })
            return {
                ...state,
                todos:updateTodos,
                completed:updateTodos.filter(todo=>todo.completed).length,
                pending:updateTodos.filter(todo=>!todo.completed).length,
                length:updateTodos.length
            }
        }

        default:
        return state
    }

    
}
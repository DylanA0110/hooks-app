
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

const getStats = (todos:Todo[]) =>({
    length:todos.length,
    completed:todos.filter(todo=>todo.completed).length,
    pending:todos.filter(todo=>!todo.completed).length
})

export type TaskAction = 
| {type:'ADD_TODO', payload:string}
| {type:'TOGGLE_TODO', payload:number}
| {type:'DELETE_TODO', payload:number}

export const getTaskInitialState = ():TaskState =>{
    return {
        todos:[],
        length:0,
        completed:0,
        pending:0,
    }
}

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
            todos:updateTodos,
           ...getStats(updateTodos)
        };

        }
        case 'DELETE_TODO':{
            
            const updateTodos = state.todos.filter((todo) => todo.id != action.payload)
            return {
                ...state,
                todos: updateTodos,
                ...getStats(updateTodos)
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
                ...getStats(updateTodos)
            }
        }

        default:
        return state
    }

    
}
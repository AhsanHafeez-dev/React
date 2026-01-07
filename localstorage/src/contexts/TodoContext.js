
import {createContext,useContext} from "react"

export const TodoContext = createContext(
    {
        
        todos: [
    {
      completed: false,
      todo: "some defualt value",
      id: 1,
        },
      
      
    ],
        addTodo : (todo) => { },
        deleteTodo : (id) => { },
        updateTodo: (id, todo) => { },
        toggleComplete:(id)=>{}
    
    }
    
    
);



export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}





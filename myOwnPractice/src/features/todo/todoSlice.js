import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = loadTodos()



function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));    
    if (todos && todos.length > 0) {
        return {todos}
    }

    return {
      todos: [{ id: nanoid(), todo: "Hello world", completed: false }],
    };
}
const todoSlice=createSlice(
    {
        name:'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = { id: nanoid(), todo: action.payload, completed: false };
                console.log("pushing",todo);
                
                state.todos.push(todo)
                localStorage.setItem("todos",JSON.stringify(state.todos))
            },
            deleteTodo: (state, action) => {
                state.todos = state.todos.filter(
                    (el)=>el.id!==action.payload
                )
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        }
}

)



export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
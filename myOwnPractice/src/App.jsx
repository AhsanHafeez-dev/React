
import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import AddTodo from "../../reduxTookit/src/components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
       <AddTodo />
      <Todo />
    </>
    )
}

export default App

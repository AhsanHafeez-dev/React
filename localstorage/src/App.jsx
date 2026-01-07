import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoProvider} from "./contexts";
function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
   
    setTodos(prev => [     {...todo,completed:false,id:Date.now()},   ...prev   ]   );
    
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => 
      prev.map(
        (el) => {
          if (el.id == id) return todo;
          return el;
        }

      )
    )

    
  };

  const deleteTodo = (id) => {
    setTodos(prev=>prev.filter((el)=>el.id!=id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(el => el.id == id ? { ...el, completed: !el.completed } : el));
  }


  useEffect(
    () => {
      const todos = JSON.parse(localStorage.getItem("todos"));

      if (todos && todos.length > 0) {
        setTodos(todos);
      }
      
     },
    [])
  
  
  useEffect(
    () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
  return (
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete,todos}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
            
                    </div>
                    <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            
            {todos.map((el) => {
              return <TodoItem key={el.id} todo={el} />
            })}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

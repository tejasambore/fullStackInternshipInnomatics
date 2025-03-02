import {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
   setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
   );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-5">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Todo List
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          editTodo={editTodo} 
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App

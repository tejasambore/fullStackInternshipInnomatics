import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 mt-2 rounded-md shadow-sm transition-all hover:bg-gray-200">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow px-2 py-1 border rounded-md"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-grow cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={() => { editTodo(todo.id, newText); setIsEditing(false); }}
          className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 ml-2"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

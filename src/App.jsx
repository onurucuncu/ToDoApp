import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [todoValue, setTodoValue] = useState("");
  const [editableIndex, setEditableIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos(newTodo) {
    const trimmedTodo = newTodo.trim();

    if (!trimmedTodo) return;

    if (editableIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editableIndex].text = trimmedTodo;
      updatedTodos[editableIndex].date = new Date().toLocaleString();
      setTodos(updatedTodos);
      setEditableIndex(null);
    } else {
      const newTodoItem = {
        text: trimmedTodo,
        date: new Date().toLocaleString(),
        done: false,
      };
      setTodos([...todos, newTodoItem]);
    }

    setTodoValue("");
  }

  function handleDoneTodos(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  }

  function handleDeleteTodos(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
      setTodos(newTodoList);
      if (editableIndex === index) setEditableIndex(null);
    }
  }

  function handleEditTodos(index) {
    const todoEditable = todos[index];
    setTodoValue(todoEditable.text);
    setEditableIndex(index);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        editableIndex={editableIndex}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        handleDoneTodos={handleDoneTodos}
        editableIndex={editableIndex}
      />
    </>
  );
}

export default App;

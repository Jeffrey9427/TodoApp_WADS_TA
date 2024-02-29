import "../App.css";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoList } from "../components/TodoList/TodoList";
import { Header } from "../components/Header/Header";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false, isEditing: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, newTitle) {
    setTodos(prevTodos => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    });
  }

  return (
    <>  
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos = {todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default Todo;
import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <div className="app-header">TODO</div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;

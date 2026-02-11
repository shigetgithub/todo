import type { Todo } from "../types";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
      </label>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="削除"
      >
        &times;
      </button>
    </li>
  );
}

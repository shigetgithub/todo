import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="いまどうしてる？"
      />
      <button type="submit">Post</button>
    </form>
  );
}

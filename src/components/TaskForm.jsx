import { useState } from "react";
import "./../styles/TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("media");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task, priority);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="urgente">Urgente</option>
        <option value="alta">Alta</option>
        <option value="media">Média</option>
        <option value="baixa">Baixa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;

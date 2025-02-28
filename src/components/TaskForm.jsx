import { useState } from "react";
import "./../styles/TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState(""); // Cria um hook que armazena a atualização da tarefa (set) e a definição dele

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; //Se for vazia, impede
    addTask(task);
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
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;

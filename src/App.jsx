import { useState } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]); //armazenar tasks no array

  const addTask = (task) => {
    setTasks([...tasks, task]); //adicionar as tasks
  };
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

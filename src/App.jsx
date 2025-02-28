import { useState } from "react";
import "./styles/App.css";
import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [tasks, setTasks] = useState({
    urgente: [],
    alta: [],
    media: [],
    baixa: [],
  }); //armazenar tasks no array

  const addTask = (task, priority) => {
    setTasks((prev) => ({
      ...prev,
      [priority]: [...prev[priority], task],
    }));
  };
  const removeTask = (priority, taskToRemove) => {
    setTasks((prev) => ({
      ...prev,
      [priority]: prev[priority].filter((task) => task !== taskToRemove),
    }));
  };

  const clearTasks = () => {
    setTasks({
      urgente: [],
      alta: [],
      media: [],
      baixa: [],
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourcePriority = source.droppableId;
    const destinationPriority = destination.droppableId;

    const movedTask = tasks[sourcePriority][source.index];
    const newSourceList = [...tasks[sourcePriority]];
    newSourceList.splice(source.index, 1);

    const newDestinationList = [...tasks[destinationPriority]];
    newDestinationList.splice(destination.index, 0, movedTask);

    setTasks((prev) => ({
      ...prev,
      [sourcePriority]: newSourceList,
      [destinationPriority]: newDestinationList,
    }));
  };

  return (
    <div className="container">
      <Header />
      <TaskForm addTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskContainer tasks={tasks} removeTask={removeTask} />
      </DragDropContext>
      <button onClick={clearTasks}>Limpar Todas</button>
    </div>
  );
}

export default App;

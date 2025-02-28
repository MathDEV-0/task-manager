const TaskActions = ({ clearTasks }) => {
  return (
    <div className="task-actions">
      <button onClick={clearTasks}>Limpar Tarefas</button>
    </div>
  );
};

export default TaskActions;

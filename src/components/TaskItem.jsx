import { motion } from "framer-motion";
import { Draggable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, priority, removeTask, index }) => {
  return (
    <Draggable draggableId={task} index={index}>
      {(provided) => (
        <motion.li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {task}
          <button onClick={() => removeTask(priority, task)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </motion.li>
      )}
    </Draggable>
  );
};

export default TaskItem;

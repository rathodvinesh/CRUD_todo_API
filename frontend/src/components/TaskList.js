import React, { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "./Api";

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const data = await getAllTasks();
        setTasks(data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks(); // Refresh task list
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong> - {task.description}
                        <button onClick={() => onEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;



// import React, { useEffect, useState } from "react";
// import { getTasks, createTask } from "./Api";

// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState({ title: "", description: "" });

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const fetchTasks = async () => {
//         const data = await getTasks();
//         setTasks(data);
//     };

//     const handleCreateTask = async () => {
//         await createTask(newTask);
//         setNewTask({ title: "", description: "" });
//         fetchTasks(); // Refresh list
//     };

//     return (
//         <div>
//             <h2>Task List</h2>
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.id}>{task.title}: {task.description}</li>
//                 ))}
//             </ul>

//             <h3>Add Task</h3>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={newTask.title}
//                 onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Description"
//                 value={newTask.description}
//                 onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//             />
//             <button onClick={handleCreateTask}>Add Task</button>
//         </div>
//     );
// };

// export default TaskList;

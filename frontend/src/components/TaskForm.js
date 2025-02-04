import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "./Api";

const TaskForm = ({ selectedTask, refreshTasks }) => {
    const [task, setTask] = useState({ title: "", description: "" });

    useEffect(() => {
        if (selectedTask) {
            setTask(selectedTask);
        } else {
            setTask({ title: "", description: "" });
        }
    }, [selectedTask]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
//        refreshTasks();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task.id) {
            await updateTask(task.id, task);
        } else {
            await createTask(task);
        }
//        refreshTasks();
        setTask({ title: "", description: "" });
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Task Title"
                required
            />
            <input
                type="text"
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Task Description"
                required
            />
            <button type="submit">{task.id ? "Update" : "Create"} Task</button>
        </form>
    );
};

export default TaskForm;

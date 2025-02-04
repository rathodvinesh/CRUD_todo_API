import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
  const [selectedTask,setSelectedTask]=useState(null);
  return (
    <div className="App">
      <h1>Task Manager</h1>
            <TaskForm selectedTask={selectedTask} refreshTasks={() => setSelectedTask(null)} />
            <TaskList onEdit={setSelectedTask} />
    </div>
  );
}

export default App;

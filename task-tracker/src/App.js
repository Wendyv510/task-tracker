
import './App.css';

import { useState } from 'react' 
import Header from './components/Header' 
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    }
  ])

  const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
  }

    const toggleReminder = (id) => { 
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ))
    }
  return (
    <div className="container">
     <Header />
     { tasks.lenght > 0 ? (
     <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleReminder} /> 
     ) : ( 'No Tasks') 
     }
    </div>
  );
}

export default App;

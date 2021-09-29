import React from 'react'

const Tasks = () => {
    return (
        <div>
          {Tasks.map((task) => (task.text))}  
        </div>
    )
}

export default Tasks

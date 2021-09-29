import {faTimes } from 'react-icons/fa' 

const Task = ({ task }) => {
    return (
        <div className='event'>
            <h3>{task.text} <FaTimes /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

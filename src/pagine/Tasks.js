import React, {useState} from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import './tasks.css';
import FilterTasks from "../components/FilterTasks";

export function Tasks(handleUser) {

    //Gestione del tasto More Info della TaskCard. Al massimo un task aperto
    const [expandedTaskId, setExpandedTaskId] = useState(null);

    const handleMoreInfoClick = (taskId) => {
        setExpandedTaskId(expandedTaskId === taskId ? null : taskId)
    }
    
    //Gestione della finestra CreateTask
    const [createTaskVisible, setCreateTabVisible] = useState(false);

    const handleVisibleCreateTask = () =>{
        setCreateTabVisible (false);
    }

    //Gestione del tasto Done
    const handleDoneClick = (taskId) => {
        setExpandedTaskId(null)
        const updatedTasks = tasks.map (task =>
            task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task 
        );
        setTasks(updatedTasks);
    }

    //Gestione della tabFilter
    const [openFilterTab, setOpenFilterTab] = useState(false)
    

    //Gestione Filtro
    //URGENT FILTER
    const [priorityFilter, setPriorityFilter] = useState('');

    const handleFilterselectedClick = (filter) => {
        setPriorityFilter(filter);

    }

    //FakeData
    const [tasks, setTasks] = useState([
        { id: '1', name: 'Giovanni non Rana', taskName: 'Buttare la spazzatura', hours: 3, priority:'urgent', isCompleted: false },
        { id: '2', name: 'Abdullah Moahammad', taskName: 'Lavare i piatti', hours: 3, priority:'high', isCompleted: false },
        { id: '3', name: 'Abdullah Moahammad', taskName: 'Lavare i piatti', hours: 3, priority:'normal', isCompleted: false },
        { id: '4', name: 'Abdullah Moahammad', taskName: 'Lavare i piatti', hours: 3, priority:'low', isCompleted: false },
    ]);



    return (
        <>
        <nav className="row">
        <button className='col-6 btn btn-dark createTaskButton'  onClick={() => setCreateTabVisible(true)}>Createtask</button> {/*onClick={onCreateTaskClick}*/}
        <button className='col-6 btn btn-dark createTaskButton'  onClick={() => setOpenFilterTab(!openFilterTab)}>Filtra</button>
        </nav>
        <div>{openFilterTab && <FilterTasks onFilterSelectedClick={handleFilterselectedClick} />}</div>
            <div>{createTaskVisible && <CreateTask onVisibleCreateTask={handleVisibleCreateTask} />}
            </div>
            
            <div>{priorityFilter}</div>
        {/*tasks grid*/}
        <div className="notCompleted-task-row row"> {
            tasks.map((task) => (
                !task.isCompleted && (priorityFilter===task.priority || priorityFilter==='') && 
                <TaskCard
                    key={task.id}
                    taskId={task.id}
                    name={task.name}
                    taskName={task.taskName}
                    hours={task.hours}
                    isCompleted={task.isCompleted}
                    isExpanded={expandedTaskId === task.id}
                    priority={task.priority}
                    onMoreInfoClick={() => handleMoreInfoClick(task.id)}
                    onDoneClick={handleDoneClick}
                />
            ))
        }
        </div>
        <div className="completed-task-row row"><h1>Tasks Completed</h1> {
            tasks.map((task) => (
                task.isCompleted && (priorityFilter===task.priority || priorityFilter==='') && 
                <TaskCard
                    key={task.id}
                    taskId={task.id}
                    name={task.name}
                    taskName={task.taskName}
                    hours={task.hours}
                    isCompleted={task.isCompleted}
                    isExpanded={expandedTaskId === task.id}
                    priority={task.priority}
                    onMoreInfoClick={() => handleMoreInfoClick(task.id)}
                    onDoneClick={handleDoneClick}
                />
            ))
        }
        </div>
        </>
    )
}
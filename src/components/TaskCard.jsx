import React, { useState, useEffect } from 'react';
import './taskCard.css';
import PropTypes from 'prop-types' //Debugging Purpose, it console.log errors
import axios from 'axios'
import { set } from 'mongoose';

function TaskCard({ taskId, personId, taskName, name, hours, isCompleted, isExpanded, onMoreInfoClick, onDoneClick, taskDescription, handleUser2, priority }) {


    /*const handleDoneClick = async () => {
        
        setCompleted(true);
        try {
            console.log("im sending a request")
            onDoneClick(taskId);
            const response = await axios.put(`/api/todos/`, {
                isCompleted: true
            });
            if (response.status === 200) {
                console.log('operazione completata con successo');
            }
        } catch (error) {
            console.error("errore nell'aggiornare lo stato del task", error);
            setCompleted(false);
        }
    };*/

    return (<div className={`col-12 col-lg-6 col-xl-4 card ${isCompleted ? 'complete' : ''} ${!isExpanded ? 'not-expanded' : 'expanded'} 
    ${priority === 'urgent' ? 'task-urgent' : ''}`}>
        <div className="row g-0"> {/* g-0 rimuove il padding tra le colonne */}
            <div className="col-8 p-3"> {/* Padding per le info */}
                <h5 className="task-name">{taskName}</h5>
                <p className="task-person">{name}</p>
                <span className="task-priority">{priority}</span> {/* Potenziale funzione per gestire più persone in un task */}
            </div>
            <div className="col-3 d-flex align-items-center"> {/* Usato flex per allineare le icone */}
                <div className="icon-container me-2"> {/* margine a destra per spazio */}
                    {!isCompleted ? 
                    <i className="bi bi-ban-fill" onClick={() => onDoneClick(taskId)} /> : 
                    <i className="bi bi-check-circle-fill btn-primary" onClick={() => onDoneClick(taskId)} />}
                </div>
                <div className="icon-container">
                    {isExpanded ?
                    <i className="bi bi-arrow-up btn-secondary" onClick={onMoreInfoClick}></i> :
                    <i className="bi bi-arrow-down btn-secondary" onClick={onMoreInfoClick}></i>}
                </div>
            </div>
        </div>
        <div className="row">
            {isExpanded && (
                <div className="moreInfoContent">
                    <p>{taskDescription}</p>
                </div>
            )}
        </div>
    </div>
    
    );
}

//debugging purpose
TaskCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isCompleted: PropTypes.bool
}


//it gives default values for props
TaskCard.defaultProps = {
    name: "nome persona",
    age: "9999",
    isCompleted: false,
    taskDescription: 'Adipisicing laborum esse ipsum enim ullamco nisi amet exercitation sit labore ipsum. Nisi laboris amet labore cupidatat fugiat aliqua magna. In aliqua consectetur Lorem consectetur.',
}


export default TaskCard;
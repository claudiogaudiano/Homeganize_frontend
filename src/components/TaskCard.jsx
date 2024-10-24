import React, { useState } from 'react';
import './taskCard.css';
import PropTypes from 'prop-types' //Debugging Purpose, it console.log errors
import axios from 'axios'

function TaskCard(props) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handleMoreInfoClick = () => {
        setShowMoreInfo(!showMoreInfo);
    }

    const [isCompleted, setIsCompleted] = useState(props.isCompleted);

    const handleDoneClick = async () => {
        try {
            console.log("im sending a request")
            const response = await axios.put('/api/todos/${props.taskID}', {
                isCompleted: true
            });
            if (response.status === 200) {
                setIsCompleted(true);
            }
        } catch (error) {
            console.error("errore nell'aggiornare lo stato del task", error);
        }
    };


    return (
        <div className={`card ${isCompleted ? 'complete' : ''}`}>
            <span className="taskName">{props.taskName + props.hours}</span>
            <p className="assinedPerson">{props.name}</p> {/*potential feature => manage more people in a task*/}
            <button className="doneButton">DONE BUTTON</button>
            {/*move item - send data to the server - */}
            {!isCompleted && (<button className="moreInfo" onClick={handleMoreInfoClick}>
                {showMoreInfo ? 'SHOW LESS' : 'MORE INFO'}
            </button>)}

            {showMoreInfo && (
                <div className="moreInfoContent">
                    <p>descrizione</p>
                    <p>priorità</p>
                    <p>scadenza</p>
                </div>
            )}

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
}


export default TaskCard;
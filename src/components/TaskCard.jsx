import React from 'react';
import './taskCard.css';
import PropTypes from 'prop-types' //Debugging Purpose, it console.log errors

function TaskCard(hello) {
    return(
        <div className="card">
            <span className="taskName">{hello.taskName + hello.hours}</span>
            <p className="assinedPerson">{hello.name}</p> {/*potential feature => manage more people in a task*/}
            <button className="doneButton">DONE BUTTON</button>
            {/*move item - send data to the server - */}
            <button className="moreInfo">MORE INFO</button>
        </div>
    );
}

//debugging purpose
TaskCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    //we also have boolean with PropTypes.boolean
}


//it gives default values for props
TaskCard.defaultProps = {
    name: "nome persona",
    age: "9999"
}


export default TaskCard;
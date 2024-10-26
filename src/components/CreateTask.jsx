import React, { useState, useEffect } from 'react';
import './CreateTask.css';
import PropTypes from 'prop-types' //Debugging Purpose, it console.log errors
import axios from 'axios'
import { set } from 'mongoose';

export default function CreateTask({ onVisibleCreateTask }) {

    return (
        <div className="overlay-create-task container-fluid">
            <div className="create-task-window col-10 col-sm-8">
                <div className="container-fluid">
                    <button className='close-btn' onClick={onVisibleCreateTask}>
                        X
                    </button>
                    <form action="">
                        <label htmlFor="taskName" className='form-label'>Task Name :</label>
                        <input type='text' className='form-control' id='taskName' placeholder='eg task' />
                        <label htmlfor="personTask" className='form-label'>Person :</label>
                        <input type='text' className='form-control' id='person' placeholder='eg person' />
                        <label htmlFor="descriptionTask" className='form-label'>Description</label>
                        <input type='text' className='form-control' id='description' placeholder='eg description'></input>
                        <label htmlFor="deadlineTask">Deadline of the Task:</label>
                        <input type="date" id="bdeadlineTask"></input><br />
                        <p>Urgente: da fare il prima possibile a partire da adessi</p>
                        <p>High: verrà visualizzata sopra rispetto ai task con priorità normal</p>
                        <p>Normal: standard</p>
                        <p>Low: non ha una scadenza</p>
                        <input type="radio" id="urgent" name="priority" value="URGENT" />
                        <label htmlFor="urgent">URGENTE</label><br />
                        <input type="radio" id="high" name="priority" value="HIGH" />
                        <label htmlFor="high">HIGH</label><br />
                        <input type="radio" id="normal" name="priority" value="NORMAL" />
                        <label htmlFor="normal">NORMAL</label><br />
                        <input type="radio" id="low" name="priority" value="LOW" />
                        <label htmlFor="low">LOW</label>
                    </form>
                </div>
            </div>

        </div>
    )







}
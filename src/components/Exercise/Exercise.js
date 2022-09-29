import React, { useState } from 'react';
import List from '../List/List';
import './Exercise.css';

const Exercise = (props) => {
    const {img, name,about, time, age} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt=''></img>
            <h2>name: {name}</h2>
            <p>Details: {about}</p>
            <p>Age: {age}</p>
            <p>Time: {time}</p>
            <button onClick={() => props.handleAddTocart(props.exercise)} className='btn-list'>Add to list</button>

        </div>
    );
};

export default Exercise;
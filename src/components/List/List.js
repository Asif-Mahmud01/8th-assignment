import React, { useState } from 'react';
import './List.css';
import image from '../../images/asif.jpg'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({list}) => {

    const notify =() =>{
        toast('Hurrah!! Acivity completed')
    }

    let totalTime = 0;
    for(const aTime of list){
        totalTime = totalTime + aTime.time;
    }
    const [count, setCount] = useState([])
    const breakOne = () =>{
        const count = 10;
        setCount(count)
    }
    const breakTwo = () =>{
        const count = 20;
        setCount(count)
    }
    const breakThree = () =>{
        const count = 30;
        setCount(count)
    }
    const breakFour = () =>{
        const count = 40;
        setCount(count)
    }
    const breakFive = () =>{
        const count = 50;
        setCount(count)
    }
    return (
        <div className='list'>
            <div className='user'>
                <div className="user-details">
                    <img src={image} alt=''></img>
                    <div className="user-text">
                        <h2>Asif Mahmud</h2>
                        <h2>selected items:{list.length}</h2>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="user-fitness">
                    <div className="weight">
                        <h2>62KG</h2>
                        <h3>Weight</h3>
                    </div>
                    <div className="height">
                        <h2>5.5</h2>
                        <h3>Height</h3>
                    </div>
                    <div className='age'>
                        <h2>23 years</h2>
                        <h3>Age</h3>
                    </div>
                </div>
            </div>
            <div className="break-container">
                <h2>Add a break</h2>
                <div className="seconds">
                    <button onClick={breakOne}><h3>10s</h3></button>
                    <button onClick={breakTwo}><h3>20s</h3></button>
                    <button onClick={breakThree}><h3>30s</h3></button>
                    <button onClick={breakFour}><h3>40s</h3></button>
                    <button onClick={breakFive}><h3>50s</h3></button>
                </div>
            </div>
            <div className="exercise-details">
                <h2>Exercise details</h2>
                <h2 className='exercise-time'>Exercise time: {totalTime}</h2>
                <h2 className='break-time'>Break time: {count}</h2>
            </div>
            <div className="activity-completed">
                <button onClick={notify}><h2>Activity Completed</h2></button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
        
    );
};

export default List;

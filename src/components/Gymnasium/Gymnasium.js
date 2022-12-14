import React, { useEffect, useState } from 'react';
import Answers from '../Answers/Answers';
import Exercise from '../Exercise/Exercise';
import List from '../List/List';
import './Gymnasium.css'

const Gymnasium = () => {
    const [exercises, setExercises] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddTocart = (exercise) => {
        const newList = [...list, exercise]
        setList(newList)
        // console.log(setList)
    }

    return (
        <div className='gymnasium-container'>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleAddTocart={handleAddTocart}
                    ></Exercise>)
                }
            </div>
            <div className='list-container'>
                <List list={list}></List>
            </div>
            <div>
                <Answers></Answers>
            </div>
        </div>
    );
};
export default Gymnasium;
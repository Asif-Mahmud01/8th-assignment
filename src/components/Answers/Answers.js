import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div className='answers'>
                <h2>1. How does react work</h2>
                <h3>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h3><br />

                <h2>2. Difference between props and state</h2>
                <h3>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</h3>

                <h2>3. Use of useeffect</h2>
                <h3>The useEffect Hook allows you to perform side effects in your components.useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. This is not what we want. There are several ways to control when side effects run.</h3>
        </div>
    );
};

export default Answers;
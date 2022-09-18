import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    return (
        <div className={styles.counter}>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};
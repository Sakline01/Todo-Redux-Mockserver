import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, division } from '../../action';
import styles from './counter.module.css'

const Counter = () => {
    const count = useSelector((state) => state.Count);
    const [val, setVal] = useState(1);
    const dispatch = useDispatch();
    return (
        <div className={styles.counter}>
            <h1>counter {count}</h1>
            <div>
                <input className={styles.valueofx} type="number" onChange={(e) => setVal(Number(e.target.value))} />
            </div>
            <button onClick={() => dispatch(increment(val))}>+</button>
            <button onClick={() => dispatch(decrement(val))}>-</button>
            <button onClick={() => dispatch(multiply(val))}>*</button>
            <button onClick={() => dispatch(division(val))}>/</button>
        </div>
    );
}

export default Counter;

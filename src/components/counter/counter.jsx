import { useState } from 'react';
import CounterAction from './counterActions'

import './counter.css'

const Counter = () => {
    const [number, setNumber] = useState(0)
    const increase = () => {
        let newValue = number + 1
        setNumber(newValue);
    };
    const decrease = () => {
        let newValue = number - 1
        setNumber(newValue);
    };

    return (<div className="container">
    <div className="text-center mt-5 border p-5 shadow w-75 mx-auto">
        <h1>Welcome To My Counter</h1>
        <h2 className="my-4">Counter : {number}</h2>
        <CounterAction increase={increase} decrease={decrease} />
    </div>
    </div>
    )
}
export default Counter;
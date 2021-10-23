import CounterAction from './counterActions'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/count';

const Counter = () => {
    const countState = useSelector(state =>state.counterReducer.count)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(incrementCount(1))
    };
    const decrease = () => {
        dispatch(decrementCount(1))

    };

    return (<div className="container">
        <div className="text-center mt-5 border p-5 shadow w-75 mx-auto bg-white">
            <h1>Welcome To My Counter</h1>
            <h2 className="my-4">Counter : {countState}</h2>
            <CounterAction increase={increase} decrease={decrease} />
        </div>
    </div>
    )
}
export default Counter;
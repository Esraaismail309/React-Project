import './counter.css'

const Counter = (props) => {
    return (
        <div className="counter_title">Counter : {props.number}</div>
    )
}
export default Counter;
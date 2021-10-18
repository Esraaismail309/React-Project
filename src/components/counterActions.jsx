import './counterAction.css'
import Buttons from './buttons';

const CounterAction = (props) => {
    return (<>
        <Buttons title="increase" handel={props.increase}></Buttons>
        <Buttons title="decrease" handel={props.decrease}> </Buttons>
    </>
    )
}
export default CounterAction;
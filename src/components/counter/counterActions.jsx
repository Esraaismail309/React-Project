import './counterAction.css'
import Buttons from './buttons';

const CounterAction = (props) => {
    return (<>
        <Buttons title="Decrease" handel={props.decrease}> </Buttons>
        <Buttons title="Increase" handel={props.increase}></Buttons>
    </>
    )
}
export default CounterAction;
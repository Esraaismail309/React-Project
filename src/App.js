import './App.css';
import { useState } from "react"
import Counter from './components/counter'
import CounterAction from './components/counterActions'

function App() {
  const [number, setNumber] = useState(0)
  const increase = () => {
    let newValue = number + 1
    setNumber(newValue);
  };
  const decrease = () => {
    let newValue = number - 1
    setNumber(newValue);
  };

  return (
    <div className="home">
      <p className="title">Welcome To My Counter</p>
      <Counter number={number} />
      <CounterAction increase={increase} decrease={decrease} />
    </div>
  );
}

export default App;
// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './Action';

function App() {
  const counter=useSelector(state => state.counter);
  const Dispatch=useDispatch();
  return (
    <div className="App">
      <h1> Blend Redux with ReactJS</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>Dispatch(increment())}>Increment</button>
      <button onClick={()=>Dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;

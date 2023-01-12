import './App.css';
//import { useState } from 'react';
//import ShowState from './component/ShowState';
// import Calculater from './component/Calculater';
import MemoComponent from './component/MemoComponent';

function App() {
  // const [number,setNumber] = useState(0);
  // const [text,setText] = useState("");
  // const increaseNumber = () =>{
  //   setNumber(number+1);
  // }
  // const decreaseNumber = () =>{
  //   setNumber(number-1);
  // }
  // const onChange = (e) =>{
  //   setText(e.target.value);
  // }
  return (
    <div className="App">
      {/* <div>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
        <input 
        type="text" placeholder='lastname' onChange={onChange}/>
      </div>
      <ShowState number={number} text={text}></ShowState> */}
      {/* <Calculater/> */}
      <MemoComponent/>
    </div>
  );
}

export default App;

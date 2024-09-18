import './App.css';
import {useState} from "react";

function App() {
  const arr = ["7","8","9","+","4","5","6","-","1","2","3","*","0","/"];
  const [inputValue, setInputValue] = useState("");
  const [ansValue, setAnsValue] = useState("");
  
  function handleEqualSign(){
    if(!inputValue.length){
      setAnsValue("Error");
    }else{
      const ans = eval(inputValue);
      setAnsValue(ans.toString());
    }
  }
  function handleClear(){
    setInputValue("");
    setAnsValue("");
  }
  return (
    <div className="App">
      <input type="text" value={inputValue} />
      <div>{ansValue}</div>
      {arr.map((item)=>{
        return <button onClick={()=>{
          setInputValue((prev)=>prev+item);
        }}>{item}</button>
      })}
      <button onClick={handleEqualSign}>=</button>
      <button onClick={handleClear}>C</button>
    </div>
  );
}

export default App;

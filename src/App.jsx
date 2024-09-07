import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter<10) setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter>0) setCounter(counter - 1);
  }

  return (

    <>
      <h1>React practice of counter function</h1>

      <h2>Counter value is :{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>

  )
}

export default App

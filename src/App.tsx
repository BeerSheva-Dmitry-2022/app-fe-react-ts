
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState("start");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (status == "pause") {
      setTimeout(() => {
        setValue(value + 1)
      }
        , 1000);
    }
  }, [status, value]);

  function handlerClick() {
    const res = status == "start" ? "pause" : "start";
    setStatus(res);
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handlerClick}>{status}</button>

    </div>
  );
}

export default App;

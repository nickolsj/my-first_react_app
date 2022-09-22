import './App.css';
import { useState } from 'react';

const App = () => {
    const [count, setCounter] = useState(-123423);

      return (
        <div className="App">
          <button onClick={() => setCounter((prevCount) => (prevCount + 1))}>+</button>
          <h1>{counter}</h1>
          <button onClick={() => setCounter((prevCount) => (prevCount - 1))}>-</button>
        </div>
      );
}

export default App;

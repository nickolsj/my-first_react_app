import './App.css';
import { useState } from 'react';

const App = () => {
    const [c, setCounter] = useState(-123423);

      return (
        <div className="App">
          <button onClick={() => setCounter((prevCount) => (prevCount + 1))}>+</button>
          <h1>{c}</h1>
          <button onClick={() => setCounter((prevCount) => (prevCount - 1))}>-</button>
        </div>
      );
}

export default App;

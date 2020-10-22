import React, {useState} from 'react';
import Parent from './components/Parent';
import CounterContext from './components/CounterContext';

function App() {
  let countState = useState(1) //[count, setCount]

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <span className="count">{count}</span>
      <div style={{display:"flex"}}>

      <button className="button" onClick={handleIncrement}>Increment</button>
      <button className="button" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;

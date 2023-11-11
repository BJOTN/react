import { useEffect, useState } from "react";

export function Counter({ initialValue = 0, incrementAmount = 1, decrementAmount = 1 }) {

  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`Current Value:${counter}`);
  },[counter]);

  const onIncrement = () => {
    setCounter((c) => c + incrementAmount);
  };
  const onDecrement = () => {
  if (counter - decrementAmount > 0) {
    setCounter((c) => c - decrementAmount);
  } else {
    setCounter(0);
  }

  }
  const  onReset = () => {
    setCounter(0)
  }
/*   if(setCounter = 1){
    setCounter = 0
  } */
  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick = {onDecrement}>Decrement</button>
      <button onClick = {onReset}>Reset</button>
    </div>
  );
}

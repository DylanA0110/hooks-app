import { useState } from "react";


export const useCounter = (initialValue = 1) => {

    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + 1);

    const decrement = () => {
        if (count <= 1) return;
        setCount(c => c - 1);
    }

  return {
    //Properties
    count,
    //Methods
    increment,
    decrement
  }
}



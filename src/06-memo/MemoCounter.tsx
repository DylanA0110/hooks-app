import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_stuff_started");
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahi Vamos");
  }
  console.timeEnd("Heavy_stuff_started");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { count, increment } = useCounter(40_000);
  const myHeavyValue = useMemo(() => heavyStuff(count), [count]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo-{myHeavyValue}</h1>
      <hr />

      <h4>Counter: {count}</h4>
      <h4>Counter: {count}</h4>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
        onClick={increment}
      >
        +1
      </button>
    </div>
  );
};

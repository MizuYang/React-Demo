import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }
  function loseCount() {
    setCount(count - 1);
  }
  return (
    <div>
      useState:
      <div className="flex">
        <p className="me-5">數字: {count}</p>
        <button
          type="button"
          className="ring ring-red-400 block me-3"
          onClick={addCount}
        >
          增加
        </button>
        <button
          type="button"
          className="ring ring-red-400 block me-3"
          onClick={loseCount}
        >
          減少
        </button>
      </div>
    </div>
  );
}

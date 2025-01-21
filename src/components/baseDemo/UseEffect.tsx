import { useState, useEffect } from "react";

export function UseEffect() {
  const [responseCount, setResponseCount] = useState(0);
  let normalCount = 0; // 這樣寫不會觸發 useEffect，因為他不是響應式數據

  useEffect(() => {
    console.log("初始化只會執行一次的 useEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect: responseCount", responseCount);
    if (responseCount > 5) setResponseCount(0);
  }, [responseCount]);

  function addResponseCount() {
    setResponseCount(responseCount + 1);
  }
  function addNormalCount() {
    normalCount += 1;
  }
  return (
    <div>
      <p>useEffect</p>
      <div className="flex">
        <p className="me-5">useState響應式數字({'n>5; n=0'}): {responseCount}</p>
        <button
          type="button"
          className="ring ring-red-400 block me-3"
          onClick={addResponseCount}
        >
          增加
        </button>
      </div>
      <div className="flex">
        <p className="me-5">一般宣告的數字(不會觸發useEffect): {normalCount}</p>
        <button
          type="button"
          className="ring ring-red-400 block me-3"
          onClick={addNormalCount}
        >
          增加
        </button>
      </div>
    </div>
  );
}

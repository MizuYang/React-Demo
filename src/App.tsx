import "./App.css";

// @ts-ignore
import { Button } from "@components/todos/Button.tsx";

function fatherFn() {
  console.log("父層的方法");
}
function App() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* {title} */}
        <Button
          name="按鈕元件"
          className="focus:outline-none ring ring-primary active:bg-blue-600/30 hover:bg-blue-600/20"
          fatherFn={fatherFn}
        />
      </div>
    </>
  );
}

export default App;

import "./App.css";

// @ts-ignore
import { Button } from "@components/todos/Button.tsx";

// @ts-ignore
import { TestSlots } from "@components/todos/TestSlots.tsx";

// @ts-ignore
import { Header } from "@components/slots/header.tsx";
// @ts-ignore
import { Main } from "@components/slots/main.tsx";
// @ts-ignore
import { Footer } from "@components/slots/footer.tsx";

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

        {/* Slots */}
        <div className="ring ring-blue-400 my-4">
          透過文字傳遞插槽:
          <TestSlots
            header={<header>表頭</header>}
            main={<main>主要區塊</main>}
            footer={<footer>表尾</footer>}
          />
        </div>
        <div className="ring ring-blue-400 my-4">
          透過元件傳遞插槽:
          <TestSlots
            header={<Header />}
            main={<Main />}
            footer={<Footer />}
          />
        </div>
      </div>
    </>
  );
}

export default App;

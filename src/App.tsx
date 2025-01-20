import "./App.css";

import { Button } from "@components/baseDemo/Button.tsx";

import { Slots } from "@components/baseDemo/Slots.tsx";

import { Header } from "@components/baseDemo/slots/header.tsx";
import { Main } from "@components/baseDemo/slots/main.tsx";
import { Footer } from "@components/baseDemo/slots/footer.tsx";

import { UseState } from "@components/baseDemo/UseState.tsx";

import { Children } from "@components/baseDemo/Children.tsx";

function fatherFn() {
  console.log("父層的方法");
}
function ChildComponent() {
  return <div>我是傳入的子元件~</div>;
}

function CardComponent({ product, idx }: { product: string; idx: number }) {
  return (
    <div className="ring ring-violet-400 p-3 my-4">
      <h2>
        {idx + 1}. {product}
      </h2>
      <p>卡片內容</p>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* {title} */}
        <div className="ring ring-blue-400 my-4">
          <Button
            name="按鈕元件"
            className="focus:outline-none ring ring-primary active:bg-blue-600/30 hover:bg-blue-600/20"
            fatherFn={fatherFn}
          />
        </div>

        {/* Slots */}
        <div className="ring ring-blue-400 my-4">
          透過文字傳遞插槽:
          <Slots
            header={<header>表頭</header>}
            main={<main>主要區塊</main>}
            footer={<footer>表尾</footer>}
          />
        </div>

        {/* 屬性 props */}
        <div className="ring ring-blue-400 my-4">
          透過元件傳遞插槽:
          <Slots header={<Header />} main={<Main />} footer={<Footer />} />
        </div>

        {/* useState */}
        <div className="ring ring-blue-400 my-4">
          <UseState />
        </div>

        {/* children */}
        <div className="ring ring-blue-400 my-4">
          {/* 傳入元素 */}
          <Children>
            <div>我是直接傳入的元素</div>
          </Children>

          {/* 傳入元件 */}
          <Children>
            <ChildComponent />
          </Children>
        </div>

        {/* map 迴圈 (v-for) */}
        <div className="flex gap-x-3 ring ring-blue-400 my-4">
          {["蛋糕", "布丁", "舒芙蕾", "泡芙"].map(
            (product: string, idx: number) => {
              return <CardComponent product={product} idx={idx} />;
            }
          )}
        </div>
      </div>
    </>
  );
}

export default App;

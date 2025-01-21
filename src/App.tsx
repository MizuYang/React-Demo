import "./App.css";
import { useState } from "react";
import { cn } from "@/utils/classnames.ts";

import { Button } from "@components/baseDemo/Button.tsx";

import { Slots } from "@components/baseDemo/Slots.tsx";

import { Header } from "@components/baseDemo/slots/header.tsx";
import { Main } from "@components/baseDemo/slots/main.tsx";
import { Footer } from "@components/baseDemo/slots/footer.tsx";

import { UseState } from "@components/baseDemo/UseState.tsx";

import { Children } from "@components/baseDemo/Children.tsx";

import { UseEffect } from "@components/baseDemo/UseEffect.tsx";

import { Father } from "@components/baseDemo/useContext/Father.tsx";

import { UseMemo } from '@/components/baseDemo/UseMemo.tsx';

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
  const [activeWeather, setActiveWeather] = useState("(請選擇天氣)");
  const suggestionList: { [keyName: string]: string } = {
    大晴天超熱: "帶陽傘",
    雷雨: "開車出門",
    颱風: "颱風假在家休息",
    颶風: "別出門了吧...",
  };
  function changeActiveWeather(weatherName: string): void {
    setActiveWeather(weatherName);
  }

  const [activeComponentName, setActiveComponent] = useState("header");

  function changeActiveComponent(comName: string): void {
    setActiveComponent(comName);
  }

  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
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
          children:
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
        <div className=" ring ring-blue-400 my-4">
          map 迴圈 (v-for):
          <div className="flex gap-x-3">
            {["蛋糕", "布丁", "舒芙蕾", "泡芙"].map(
              (productName: string, idx: number) => {
                return (
                  <CardComponent
                    product={productName}
                    idx={idx}
                    key={`card-${productName}`}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* 條件判斷元素渲染 (v-if) */}
        <div className="ring ring-blue-400 my-4">
          {/* 顯示單純文字 */}
          <div>
            <p>條件判斷元素渲染 (v-if)</p>
            <p>今天的天氣是:{activeWeather}</p>
            {["大晴天超熱", "雷雨", "颱風", "颶風"].map((weatherName) => {
              return (
                <button
                  type="button"
                  className={cn(
                    "focus:outline-none ring ring-primary active:bg-blue-600/30 hover:bg-blue-600/20 inline-block me-3",
                    weatherName === activeWeather && "bg-violet-300"
                  )}
                  key={`btn-product-${weatherName}`}
                  onClick={() => changeActiveWeather(weatherName)}
                >
                  {/* onClick={(event) => changeActiveWeather(event, weatherName)} */}
                  {weatherName}
                </button>
              );
            })}
            <p>
              建議:
              <span>{suggestionList[activeWeather] || "請選擇天氣"}</span>
            </p>
          </div>

          <hr style={{ margin: "10px" }} />

          {/* 顯示元件 */}
          <div>
            <p>選擇要顯示的元件</p>
            <button
              type="button"
              className="ring ring-amber-500"
              onClick={() => changeActiveComponent("header")}
            >
              header
            </button>
            <button
              type="button"
              className="ring ring-amber-500"
              onClick={() => changeActiveComponent("footer")}
            >
              footer
            </button>

            {activeComponentName === "header" ? <Header /> : <Footer />}
          </div>
        </div>

        {/* useEffect */}
        <div className="ring ring-blue-400 my-4">
          <UseEffect />
        </div>

        {/* useContext 跨層級資料溝通 */}
        <div className="ring ring-blue-400 my-4">
          <Father />
        </div>

        {/* useMemo */} 
        <div className="ring ring-blue-400 my-4">
          <UseMemo />
        </div>
      </div>
    </>
  );
}

export default App;

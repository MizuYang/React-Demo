import { createContext, useState } from "react";
import { Middle } from "@components/baseDemo/useContext/Middle.tsx";

// 匯出給要跨層級資料傳遞的子元件
export const DataContext = createContext("");

export function Father() {
  const [data, setData] = useState("跨層級傳遞的文字");

  // 測試 useContext 響應式
  setTimeout(() => {
    setData("更新後的文字");
  }, 2000);

  return (
    <div>
      {/*  */}
      <DataContext.Provider value={data}>
        father: {data}
        <Middle />
      </DataContext.Provider>
    </div>
  );
}

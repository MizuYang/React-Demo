import { useContext } from "react";

// 匯入要傳遞資料父層建立的 createContext
import { DataContext } from "./Father.tsx";

export function Children() {
  const data = useContext(DataContext);

  return <div>children:{data}</div>;
}

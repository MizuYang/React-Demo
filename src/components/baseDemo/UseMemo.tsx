import { useMemo, useState } from "react";
export function UseMemo() {
  const [money, setCount] = useState(0);

  const bank = useMemo(() => `銀行的錢有 ${money} 元`, [money]);

  function updMoney(e: React.FormEvent<HTMLInputElement> | undefined) {
    try {
      const target = e?.target as HTMLInputElement; // 類型斷言
      setCount(+target.value);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <p>useMemo</p>

      <input
        type="number"
        className="ring ring-green-600 px-2 focus:outline-none w-20 m-2"
        value={money}
        onInput={(event) => updMoney(event)}
      />
      {bank}
    </div>
  );
}

// @ts-ignore
import { cn } from "@/utils/classnames.ts";

type Props = {
  name: string;
  className: string;
  fatherFn: () => void;
};

function childFn(): void {
  console.log("子層的方法");
}
export function Button({ name, className, fatherFn }: Props) {
  return (
    <div>
      <button
        type="button"
        className={cn(className, "block mb-2")}
        onClick={fatherFn}
      >
        {name} 點我 {"->"} 父層方法
      </button>
      <br />
      <button type="button" className={className} onClick={childFn}>
        {name} 點我 {"->"} 子層方法
      </button>
    </div>
  );
}

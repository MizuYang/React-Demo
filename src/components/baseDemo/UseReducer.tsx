import { useReducer } from "react";

type State = {
  count: number;
};
type Action = {
  type: string;
};

export function UseReducer() {
  const initialState = {
    count: 0,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "decrement":
        return { count: state.count - 1 };
      case "increment":
        return { count: state.count + 1 };

      default:
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <br />
      <button
        type="button"
        className="bg-blue-400 p-4 text-white hover:bg-blue-700"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      ｜
      <button
        type="button"
        className="bg-blue-400 p-4 text-white hover:bg-blue-700"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
    </div>
  );
}

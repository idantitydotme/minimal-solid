import { createSignal } from "solid-js";
import type CounterProps from "./counter.types";
import styles from "./counter.module.css";

export default function Counter(props: CounterProps) {
  const [count, setCount] = createSignal(props.defaultValue ?? 0);

  return (
    <button class={styles["counter"]} onClick={() => setCount(count() + (props.step ?? 1))}>
      Count: {count()}
    </button>
  );
}

export interface CalculatorOrientation {
  orientation: "vertical" | "horizontal";
}

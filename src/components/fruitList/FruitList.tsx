import { createSignal, Show, For } from "solid-js";

interface FruitListProps {
  fruits?: string[];
}

export default function FruitList(props: FruitListProps) {
  const [fruits] = createSignal(props.fruits ?? ["Banana", "Apple", "Watermelon"]);

  return (
    <ul>
      <Show when={fruits().length === 0}>
        <span>No fruits in list.</span>
      </Show>
      <For each={fruits()}>
        {(fruit, index) => (
          <li>
            {fruit} - {index()}
          </li>
        )}
      </For>
    </ul>
  );
}

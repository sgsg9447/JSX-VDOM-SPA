import { createElement } from "./src/createElement";
import { useState } from "./src/useState";
export default function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(100);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+ 버튼</button>
      <h1>count2 : {count2}</h1>
      <button onClick={() => setCount2(count2 - 1)}>- 버튼</button>
    </div>
  );
}

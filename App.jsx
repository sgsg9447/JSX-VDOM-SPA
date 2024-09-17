import { createElement } from "./src/createElement";

export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={() => console.log("click")}>버튼</button>
    </div>
  );
}

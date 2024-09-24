import { createElement } from "./createElement";

import App from "../App";
import { resetComponentIdCounter } from "./state";
import { render } from "./render";

export function reRender() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  resetComponentIdCounter();
  render(<App />, root);
}

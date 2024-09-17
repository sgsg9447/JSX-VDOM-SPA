import { createElement } from "./createElement";

import App from "../App";
import { resetStateIndex } from "./state";
import { render } from "./render";

export function reRender() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  resetStateIndex();
  render(<App />, root);
}

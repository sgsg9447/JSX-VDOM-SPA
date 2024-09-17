import { createElement } from "./src/createElement";
import App from "./App";
import { render } from "./src/render";

const root = document.getElementById("root");
render(<App />, root);

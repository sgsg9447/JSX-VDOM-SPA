export function render(VNode, container) {

  //텍스트노트 생성
  if (typeof VNode === "string" || typeof VNode === "number") {
    const textNode = document.createTextNode(VNode);
    container.appendChild(textNode);
    return;
  }

  const { type, props = {} } = VNode;

  //컴포넌트 생성
  if (typeof type === "function") {
    const componentVNode = type(props);
    render(componentVNode, container);
    return;
  }

  //html태그 생성
  if (typeof type === "string") {
    const element = document.createElement(type);
    //속성 설정
    Object.keys(props).forEach((key) => {
      const value = props[key];
      if (key === "children") {
        return;
      } else if (key.startsWith("on") && typeof value === "function") {
        // 이벤트 핸들러 설정
        const eventType = key.slice(2).toLowerCase();
        element.addEventListener(eventType, value);
      } else if (key === "className") {
        // class -> className
        element.setAttribute("class", value);
      } else if (key === "htmlFor") {
        // htmlFor -> for
        element.setAttribute("for", value);
      } else {
        element.setAttribute(key, value);
      }
    });

    //자식 노드 생성
    const children = props.children || [];
    children.forEach((child) => render(child, element));
    container.appendChild(element);
  }
}

import {
  resetStateIndex,
  generateComponentId,
  pushComponentId,
  popComponentId,
} from "./state";

/**
 * @typedef {Object} VNode
 * @property {string|function} type - 노드의 타입 (태그 이름 또는 컴포넌트 함수)
 * @property {Object} props - 노드의 속성 객체
 */

/**
 * VNode를 실제 DOM으로 변환하여 container에 append하는 함수
 * @param {VNode} VNode 변환할 Virtual DOM 노드
 * @param {HTMLElement} container VNode를 추가할 부모 DOM 요소
 * @returns {void}
 */

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
    //컴포넌트 ID 생성
    const componentId = generateComponentId();
    pushComponentId(componentId);
    resetStateIndex(componentId);
    //type 이 함수면, 함수(props)를 호출하여 컴포넌트의 VNode를 생성
    const componentVNode = type(props);
    //컴포넌트의 VNode를 다시 render 함수로 재귀적으로 호출
    render(componentVNode, container);
    popComponentId();
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

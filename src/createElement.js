export function createElement(type, props, ...children) {
  props = props || {};
  props.children = children;
  return { type, props };
}
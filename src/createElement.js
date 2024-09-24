/**
 * 이 함수는 가상 DOM에서 VNode를 생성하는 함수입니다.
 * 컴포넌트 파일에서 JSX를 사용하면 JSX 코드가 createElement 함수로 변환됩니다.
 * @param {string | function} type 함수인경우 - 사용자 정의 컴포넌트 || 문자열인 경우 - HTML 태그
 * @param {Object} props 요소의 속성을 담은 객체 (className, id, style, onClick 등)
 * @param  {...any} children 요소의 자식요소들
 * @returns {Object} VNode 객체 (type, props, children)
 * @example
 * // JSX 코드
 * const element = <div className="container">Hello, World!</div>;
 * // 변환된 코드
 * const element = createElement('div', { className: 'container' }, 'Hello, World!');
 */
export function createElement(type, props, ...children) {
  //props가 null 또는 undefined인 경우 빈 객체로 초기화 (항상 객체로 취급되도록 보장)
  props = props || {};
  //props.children에 children을 할당
  props.children = children;
  //type, props를 가진 객체를 반환
  return { type, props };
}

let componentIdCounter = 0;

/**
 * 새로운 컴포넌트 ID를 생성하는 함수
 * @returns {number} 고유한 컴포넌트 ID
 */
export function generateComponentId() {
  return componentIdCounter++;
}

export function resetComponentIdCounter() {
  componentIdCounter = 0;
}

export const stateStore = new Map();

// 컴포넌트 ID 스택 관리
const componentIdStack = [];

/**
 * 현재 렌더링 중인 컴포넌트의 ID를 스택에 추가
 * @param {number} id
 */
export function pushComponentId(id) {
  componentIdStack.push(id);
}

/**
 * 현재 렌더링 중인 컴포넌트의 ID를 스택에서 제거
 */
export function popComponentId() {
  componentIdStack.pop();
}

/**
 * 현재 렌더링중인 컴포넌트의 ID를 반환
 * @returns {number} 현재 렌더링 중인 컴포넌트의 ID
 */
export function currentComponentId() {
  return componentIdStack[componentIdStack.length - 1];
}

export function resetStateIndex(componentId) {
  if (stateStore.has(componentId)) {
    const componentState = stateStore.get(componentId);
    componentState.stateIndex = 0;
  } else {
    stateStore.set(componentId, { states: [], stateIndex: 0 });
  }
}

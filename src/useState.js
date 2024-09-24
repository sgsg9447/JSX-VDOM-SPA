import { stateStore, currentComponentId } from "./state";
import { reRender } from "./reRender";
/**
 * 상태를 생성하고 관리하는 함수
 * @param {*} initialValue
 * @returns {[any, function]} [현재 상태값, 상태를 업데이트하는 함수]
 */

export function useState(initialValue) {
  const componentId = currentComponentId(); // 현재 컴포넌트 ID 가져오기
  if (!stateStore.has(componentId)) {
    stateStore.set(componentId, { states: [], stateIndex: 0 });
  }
  const componentState = stateStore.get(componentId);
  const { states, stateIndex } = componentState;

  if (states.length === stateIndex) {
    states.push(initialValue);
  }

  const setState = (newValue) => {
    states[stateIndex] = newValue;
    reRender();
  };
  const currentValue = states[stateIndex];
  componentState.stateIndex++;
  return [currentValue, setState];
}

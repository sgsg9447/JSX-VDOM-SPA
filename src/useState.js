import { state, incrementStateIndex } from "./state";
import { reRender } from "./reRender";
/**
 * 상태를 생성하고 관리하는 함수  
 * @param {*} initialValue 
 * @returns {[any, function]} [현재 상태값, 상태를 업데이트하는 함수]
 */

export function useState(initialValue) {
  const currentIndex = state.stateIndex;
  // 아직 해당 인덱스에 상태 값이 없다면, 초기값으로 설정
  if (state.states.length === currentIndex) {
    state.states.push(initialValue);
  }
  const setState = (newValue) => {
    state.states[currentIndex] = newValue;
    reRender();
  };
  const currentValue = state.states[currentIndex];
  incrementStateIndex();
  return [currentValue, setState];
}

import { state, incrementStateIndex } from "./state";
import { reRender } from "./reRender";
/**
 *
 * @param {*} initialValue
 * @returns currentValue, setState
 */

export function useState(initialValue) {
  const currentIndex = state.stateIndex;
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

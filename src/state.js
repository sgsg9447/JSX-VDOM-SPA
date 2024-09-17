export const state = {
  states: [],
  stateIndex: 0,
};

export function incrementStateIndex() {
  state.stateIndex++;
}

export function resetStateIndex() {
  state.stateIndex = 0;
}

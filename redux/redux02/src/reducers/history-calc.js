export default function history_calc(state = [], actions) {
  switch (actions.type) {
    case "ADD_HISTORY":
      return [...state, { id: Math.random, history: actions.texto }];
    default:
      return state;
  }
}

export default function library(state = [], action) {
  switch (action.type) {
    case 'REQUEST_LIBRARY':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_LIBRARY':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.components,
        lastUpdated: action.receivedAt,
        selected: {}
      });
    case 'SET_LIBRARY_SELECTED':
      return Object.assign({}, state, {
        selected: action.selected
      });
    default:
      return state;
  }
}

export function requestLibrary(library) {
  return {
    type: 'REQUEST_LIBRARY',
    library
  };
}

export function receiveLibrary(components) {
  return {
    type: 'RECEIVE_LIBRARY',
    components,
    receivedAt: Date.now()
  };
}

export function setSelectedLibrary(selected) {
  return {
    type: 'SET_LIBRARY_SELECTED',
    selected,
    receivedAt: Date.now()
  };
}

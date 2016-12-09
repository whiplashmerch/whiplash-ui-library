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

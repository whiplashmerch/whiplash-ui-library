import { connect } from 'react-redux';
import { setSelectedLibrary } from 'demo/actions';
import ItemView from '../ItemView';
import Library from 'demo/library.json';


function checkCurrentLibarary(item) {
  return (dispatch, getState) => {
    if (libraryHasData(getState())) {
      return dispatch(getSelectedItem(item));
    }
  };
}

function libraryHasData(state) {
  const { library } = state;
  const haveItems = !!library.length;

  if (!haveItems) {
    return true;
  } else {
    return false;
  }
}

function getSelectedItem(selectedItemName) {
  return (dispatch, getState) => {
    const library  = getState().library;
    const selected = library.items.find(item => (
      item.name === selectedItemName
    ));

    return dispatch(setSelectedLibrary(selected));
  };
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  filterItemIfNeeded: (selectedItem) => {
    dispatch(checkCurrentLibarary(selectedItem));
  }
});

const VisibleItemView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView);

export default VisibleItemView;

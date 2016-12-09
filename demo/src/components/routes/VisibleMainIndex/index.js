import { connect } from 'react-redux';
import { receiveLibrary } from 'demo/actions';
import MainIndex from '../MainIndex';
import Library from 'demo/library.json';


function checkCurrentLibarary() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(receiveLibrary(Library));
    }
  };
}

function shouldFetchPosts(state) {
  const { library } = state;
  const haveItems = !!library.length;

  if (!haveItems) {
    return true;
  } else {
    return false;
  }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchLibraryIfNeeded: () => {
    dispatch(checkCurrentLibarary());
  }
});

const VisibleMainIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainIndex);

export default VisibleMainIndex;

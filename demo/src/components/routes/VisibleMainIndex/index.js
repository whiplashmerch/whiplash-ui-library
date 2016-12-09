import { connect } from 'react-redux';
import MainIndex from '../MainIndex';

const mapStateToProps = (state) => state;

const VisibleMainIndex = connect(
  mapStateToProps
)(MainIndex);

export default VisibleMainIndex;

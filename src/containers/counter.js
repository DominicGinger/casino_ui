import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Count from '../components/count.jsx';

class Counter extends Component {
  render() {
    return Count(this.props);
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ count }, _) => ({ count });

const mapDispatchToProps = (dispatch, _) => ({
  increment: () => dispatch({type: 'INCREMENT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CounterView from '../components/counter.jsx';
import counterActionCreator from '../actions/counter-action-creator.js';

class Counter extends Component {
  render() {
    return CounterView(this.props);
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

const mapStateToProps = ({ count }, _) => ({ count });

const mapDispatchToProps = (dispatch, _) => counterActionCreator(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


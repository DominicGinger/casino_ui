import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Count from '../components/count.jsx';

class Counter extends Component {
  render() {
    return Count({count: this.props.value, increment: this.props.increment });
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ count }, _) => ({
  value: count
});

const mapDispatchToProps = (dispatch, _) => ({
  increment: () => dispatch({type: 'INCREMENT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

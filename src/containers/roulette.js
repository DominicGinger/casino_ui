import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import View from '../components/roulette.jsx';
//import counterActionCreator from '../actions/counter-action-creator.js';

class Roulette extends Component {
  render() {
    return View(this.props);
  }
}

Roulette.propTypes = {
}

const mapStateToProps = ({ roulette }, _) => ({ roulette });

const mapDispatchToProps = (dispatch, _) => () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Roulette);

import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import View from '../components/roulette.jsx';
import rouletteActionCreator from '../actions/roulette-action-creator.js';

class Roulette extends Component {
  render() {
    return View(this.props);
  }
}

Roulette.propTypes = {
  spin: PropTypes.func.isRequired,
  roulette: PropTypes.shape({
    speed: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = ({ roulette }, _) => ({ roulette });

const mapDispatchToProps = (dispatch, _) => rouletteActionCreator(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Roulette);

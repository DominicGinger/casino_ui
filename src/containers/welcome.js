import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WelcomeView from '../components/welcome.jsx';
import UserActionCreator from '../actions/user-action-creator.js';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return WelcomeView(Object.assign({}, this.props, {
      updateName: e => this.props.userActions.nameChange(e.target.value),
      updateInitialCash: e => this.props.userActions.cashChange(e.target.value),
      createNewUser: this.props.userActions.validate.bind(null, this.props)
    }));
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  cash: PropTypes.number.isRequired,
  validated: PropTypes.bool.isRequired,
  valid: PropTypes.bool,
  message: PropTypes.string,
  userActions: PropTypes.shape({
    nameChange: PropTypes.func.isRequired,
    cashChange: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ user }) => (user);

const mapDispatchToProps = dispatch => ({
  userActions: UserActionCreator(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

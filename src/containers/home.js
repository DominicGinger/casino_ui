import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from '../components/home.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return HomeView(this.props);
  }
}

const mapStateToProps = state => ({ state: state });

export default connect(mapStateToProps)(Home);

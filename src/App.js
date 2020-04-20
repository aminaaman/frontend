import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';


class  App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
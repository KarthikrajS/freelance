import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage'
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage'
import ProfilePage from './components/pages/ProfilePage'
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import Footer from './components/navigation/Footer'
import {connect} from 'react-redux';

const App = ({location,isAuthenticated}) => (
    <div className="ui container">
        {isAuthenticated && <TopNavigation/>}
        <Route path="/"  location={location} exact component={HomePage}/>
        <Route path="/confirmation/:token" location={location} exact component={ConfirmationPage}/>
        <GuestRoute path="/login"  location={location} exact component={LoginPage}/>
        <GuestRoute path="/signup" location={location}  exact component={SignupPage}/>
        <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage}/>
        <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage}/>
        <UserRoute path="/dashboard" location={location} exact component={DashboardPage} />
        <UserRoute path="/profile" location={location} exact component={ProfilePage} />
        <Footer/>
    </div>

)

App.propTypes ={
  location:PropTypes.shape({
    pathname:PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated:PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated:!! state.user.email
  }
}
export default connect(mapStateToProps)(App);

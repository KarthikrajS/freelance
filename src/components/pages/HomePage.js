import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux';
import {Grid,Message,Header} from 'semantic-ui-react'
import LoginForm from "../forms/LoginForm";
// import * as actions from "../../actions/auth";
import {login} from '../../actions/auth';


class HomePage extends React.Component {

    submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));

render() {

    const {isAuthenticated} = this.props;
    return (
        <div>
            <ul>
                { !isAuthenticated  && <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Curious?
                        </Header>
                        <LoginForm submit={this.submit}/>
                        <Message>
                            New to us ? <Link to="/signup">Sign Up</Link>
                        </Message>
                        <Message>
                            Don't remember Password ? <Link to="forgot_password">Click here</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
                }
            </ul>
        </div>
    );
}

}



HomePage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    location:PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired,
    login:PropTypes.func.isRequired
};
function mapStateToProps(state) {
    return{
        isAuthenticated: !!state.user.token
    }
}
export default connect(mapStateToProps,{login})(HomePage);
import React from 'react';
import {Menu,Dropdown,Image,Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from "../../actions/auth";

const TopNavigation = ({user,logout,isAuthenticated, isAdmin}) => (
    <Menu secondary pointing>
        <Menu.Item ><Header as={Link} to="/dashboard" color='teal' textAlign='center'>Curious.</Header></Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
                Plans
            </Menu.Item>
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} /> }>
                <Dropdown.Menu>
                    <Dropdown.Item href="/profile" >Profile</Dropdown.Item>
                    <Dropdown.Item href="/projectInvitation" >Project Invitation</Dropdown.Item>
                    <Dropdown.Item href="/contest" >Contest</Dropdown.Item>
                    <Dropdown.Item onClick={()=>logout()}>Logout</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>);


TopNavigation.propTypes ={
    user: PropTypes.shape({
        email:PropTypes.string.isRequired,
    }).isRequired,
    logout:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool.isRequired,
    isAdmin:PropTypes.number.isRequired,
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
};

function mapStateToProps(state) {
    return{
        user: state.user,
        isAuthenticated: !!state.user.email,
        isAdmin: state.user.userType
    }
}

export default connect(mapStateToProps,{logout:actions.logout})(TopNavigation);
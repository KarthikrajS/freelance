import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import decode from "jwt-decode";

import SecondaryPointing from '../navigation/SecondaryPointing'
import SecondaryPointingMenu from '../navigation/SecondaryPointingMenu'
import HamburgerMenu from '../navigation/HamburgerMenu'

const DashboardPage = ({isConfirmed})=>(


    <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {isConfirmed &&
        <div>
            {/*<SecondaryPointingMenu/>*/}
            <SecondaryPointing />
            {/*<HamburgerMenu/>*/}

        </div>
        }
    </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(DashboardPage);
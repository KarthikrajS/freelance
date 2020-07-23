import React from 'react';
import styled from 'styled-components'
import LeftNav from "./LeftNav";

const Nav = styled.nav`
 width : 100%;
 height : 65px;
 border-bottom : 2px solid #f1f1f1;
 padding: 0 20px;
 display:flex;

 .logo{
 padding 15px 0 ;
 `


const HamburgerMenu =() => {

    return(
        <Nav>
        <div className="logo">NavBar</div>
        <LeftNav/>
        </Nav>
    )
    
}

export default HamburgerMenu;
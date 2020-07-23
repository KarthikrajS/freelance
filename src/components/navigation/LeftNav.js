import React from "react";
import styled from 'styled-components'

const ul= styled.ul`

ul{
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li{
    padding : 10px 10px
    } 
}

@media(max-width: 768px){
    background-color: #002538;
    position:fixed;
    top:0;
    right:0;
    height: 100vl;
    widthL:300px;
    padding-top: 3.5rem;
    flex-flow: column nowrap;
    li{
    color: #fff
    }
}
 
`
const LeftNav =() =>{
    return(
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Signup</li>
            </ul>
    )
}

export default LeftNav
import React from 'react'

import User from '../User/User'
import Points from '../Points/Points'
import HeaderImage from './HeaderImage/HeaderImage'

import logo from '../../images/coderhouse-logo.png'

import './Header.scss'

function Header({ user }) {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
                <div className="d-flex user-info">
                    <User name={user?.name} />
                    <Points points={user?.points} />
                </div>
            </div>
            <HeaderImage />
        </div>
    )
}

export default Header;

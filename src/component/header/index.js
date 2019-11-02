import React from 'react'
import './style.scss';
import Logo from '../../assets/logo.jpg';
const Header = (props) => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo" data-test="12345">
                    <img className="logoImg" src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header

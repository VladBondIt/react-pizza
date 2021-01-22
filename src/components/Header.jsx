import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/img/pizza-logo.svg';
import HeaderButton from "./HeaderButton";

function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="header__body">
                    <Link to="/react-pizza/" className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    <Link to="/react-pizza/cart" className="header__cart">
                        <HeaderButton />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
import React from "react";
import { Link } from 'react-router-dom';

import logo from '../assets/img/pizza-logo.svg';
import { Button } from "../components";

function Header() {

    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                <Link to="/cart" className="header__cart">
                    <Button />
                </Link>
            </div>
        </div>
    )
}

export default Header;
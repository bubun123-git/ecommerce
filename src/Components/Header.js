import React, { Fragment } from "react";
import './Header.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className="header">
                <h1 className="header-title">The Generics</h1>
                <button className="cart-button">Cart</button>
            </header>
        </Fragment>
    );
};

export default Header;

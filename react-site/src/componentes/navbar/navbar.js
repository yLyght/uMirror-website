import React from "react";
import "./navbar.css";

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/" className="site-title">UMirror</a>
            <ul>
                <li>
                    <a href="/Sobre">Sobre</a>
                </li>
                <li>
                    <a href="/cu">Tag de cuzão</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
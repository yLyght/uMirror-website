import React from "react";
import "./navbar.css";

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/" className="site-title">uMirror</a>
            <ul>
                <li>
                    <a href="/Sobre">Sobre</a>
                </li>
                <li>
                    <a href="/CompProj">Componentes usados no projeto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
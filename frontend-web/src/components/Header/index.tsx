import React from "react";
import { Link } from "react-router-dom";
import DeathStar from "../../assets/death-star.png"
import './styles.css'

const Header = () => (
    <Link to="/">
    <header className = 'main-header'>
        
        <img src = {DeathStar}  alt = "Icon"/>
        <div className = "logo-text">
            <span className="logo-text-1">Stat Wars</span>
        </div>

    </header>
    </Link>
);

export default Header;
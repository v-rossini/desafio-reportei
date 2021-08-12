import React from "react";
import {ReactComponent as DeathStarIcon} from "../../assets/death-star.svg"
import DeathStar from "../../assets/death-star.png"
import './styles.css'

const Header = () => (
    <header className = 'main-header'>
        <img src = {DeathStar}  alt = "Icon"/>
        <div className = "logo-text">
            <span className="logo-text-1">Stat Wars</span>
        </div>
            
    </header>
);

export default Header;
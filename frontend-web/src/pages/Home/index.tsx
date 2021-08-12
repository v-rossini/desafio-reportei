import React from "react";
import {ReactComponent as Arrow} from "../../assets/arrow.svg";
import {ReactComponent as HomeImage} from "../../assets/kylo-vader.svg";
import './styles.css';

const Home = () => (
  <div className = "home-container">
      <div className = "home-text">
          <h1 className = "home-text-title">asdaugdsa</h1>
          <h3 className = "home-text-subtitle">Clique no botão abaixo para descobrir!</h3>
          <div className = "home-actions">
              <button className = "home-btn">quero saber</button>
              <div className = "home-btn-icon">
                  <Arrow />
              </div>
          </div>
      </div>
      <HomeImage />
  </div>
      
);

export default Home;
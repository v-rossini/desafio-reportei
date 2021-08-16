import React from "react";
import {ReactComponent as Arrow} from "../../assets/arrow.svg";
import {ReactComponent as HomeImage} from "../../assets/kylo-vader.svg";
import { Link } from "react-router-dom";
import './styles.css';
import './helpers'
import { RANDOM_MESSAGE } from "./helpers";

const HOME_MESSAGES = ["Quantas personagens existem no universo de Star Wars?", 
                        "Quantos planetas são mencionados nos filmes de Star Wars?",
                        "Quantas naves aparecem nos filmes de Star Wars", 
                        "Quais são os veículos mais populares de Star Wars?",
                        "Quais são as naves mais populares de Star Wars?", 
                        "Quais são os maiores planetas do universo de Star Wars?", 
                        "Quais personagem de Star Wars aparecem em mais filmes?" 
                    ];

const Home = () => (
  <div className = "home-container">
      <div className = "home-text">
          <h1 className = "home-text-title">
              { RANDOM_MESSAGE(HOME_MESSAGES) }
          </h1>
          <h3 className = "home-text-subtitle">Clique no botão abaixo para descobrir!</h3>
          <Link to="/data">
          <div className = "home-actions">
              <button className = "home-btn">quero saber</button>
              <div className = "home-btn-icon">
                  <Arrow />
              </div>
          </div>
          </Link>
      </div>
      <HomeImage />
  </div>
      
);

export default Home;
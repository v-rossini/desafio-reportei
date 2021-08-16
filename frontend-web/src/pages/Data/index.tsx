import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { processData } from "./helpers";
import "./types";
import { record } from "./types";
import Tabs from "./Tabs";
import Filter from "../../components/Filter";
import Pagination from "./Pagination";

const BASE_URL = "https://swapi.dev/api";

const headers = {
  people: {
    name: "NOME",
    heigh: "ALTURA",
    mass: "PESO",
    gender: "GENERO",
    vehicles: "QT. VEÍCULOS",
    starships: "QT. NAVES",
    films: "QT. FILMES",
  },
  planets: {
    name: "NOME",
    population: "POPULAÇÃO",
    diameter: "DIAMETRO",
    rotation_period: "P. ROTAÇÃO",
    orbital_period: "P. ORBITAL",
    climate: "CLIMA",
    terrain: "TERRENOS",
    gravity: "GRAVIDADE",
  },
  vehicles: {
    name: "NOME",
    model: "MODELO",
    class: "CLASSE",
    passengers: "PASSAGEIROS",
    cargo_capacity: "CAP. CARGA",
    max_atmosphering_speed: "VEL MÁX.",
    length: "COMPRIMENTO",
    crew: "QT. PILOTOS",
  },
  starships: {
    name: "NOME",
    model: "MODELO",
    class: "CLASSE",
    hyperdrive_rating: "HYPERDRIVE |",
    MGLT: " MGLT |",
    length: " COMPRIMENTO |",
    crew: " QT. PILOTOS",
  },
  films: {
    title: "TÍTULO",
    episode_id: "N. EPISÓDIO",
    director: "DIRETOR",
    producer: "PRODUTORES",
    release_date: "DATA DE LANÇAMENTO",
  },
  species: {
    name: "NOME",
    classification: "CLASSIFICAÇÃO",
    designation: "DESIGNAÇÃO",
    average_height: "TAMANHO MÉDIO",
    average_lifespan: "EXPEC. VIDA",
    people: "QT. PERSONAGENS",
    films: "QT. FILMES",
  }

}

const Data = () => {
  const CURRENT_SEARCH = "?page=";

  const [recordsData, setRecords] = useState<record[]>();
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentTab, setCurrentTab] = useState("people");

  const changePage = (index: number) => {
    if (index !== currentPage) setCurrentPage(index);
  };

  const changeTab = (index: string) => {
    if (index !== currentTab) {
      setCurrentTab(index);
      setCurrentPage(1);
      setRecords(undefined);
    }
  };

  useEffect(() => {
    let promiseActive = true
    axios
      .get(`${BASE_URL}/${currentTab}/${CURRENT_SEARCH}${currentPage}`)
      .then(response => { 
        if (promiseActive){
          setNumberOfPages(Math.ceil(response.data.count / 10));
          setRecords(response.data.results);
      }
      })
      .catch((error) => console.log(error))    ;  
      return () => {promiseActive = false}
    
  }, [currentPage, currentTab]);

  return (
    
    <div className="page-container">
      <Filter link="/graphs"  text="Ver gráficos" search = {false}  />
      <Tabs currentTab={currentTab} changeTab={changeTab} />
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr key="DATA">
            {Object.values(headers[currentTab]).map((value: string) => (
              <th key={value}>{value}</th>
            ))}
          </tr>
        </thead>
        { 
        recordsData?
         (
          <tbody>
            {
              recordsData?.map((record) => (
                <tr key={record.url}>
                  {Object.keys(headers[currentTab]).map(field => (

                    <td>{processData(record[field])}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        ) : (
        <tbody>
          <tr>
            <td>AGUARDE. CARREGANDO DADOS</td>
          </tr>
        </tbody>
         )
        }
      </table>
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default Data;

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
    height: "ALTURA",
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
    vehicle_class: "CLASSE",
    passengers: "PASSAGEIROS",
    cargo_capacity: "CAP. CARGA",
    max_atmosphering_speed: "VEL MÁX.",
    length: "COMPRIMENTO",
    crew: "QT. PILOTOS",
  },
  starships: {
    name: "NOME",
    model: "MODELO",
    starship_class: "CLASSE",
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
  

  const [recordsData, setRecords] = useState<record[]>();
  const [numberOfRecords, setNumberOfRecords] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentTab, setCurrentTab] = useState("people");
  const [currentSearch, setCurrentSearch] = useState("?page=")

 

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
      .get(`${BASE_URL}/${currentTab}/${currentSearch}${currentPage}`)
      .then(response => { 
        if (promiseActive){
          setNumberOfRecords(response.data.count );
          setRecords(response.data.results);
      }
      })
      .catch((error) => console.log(error))    ;

      return () => {promiseActive = false}
    
  }, [currentPage, currentTab]);

  return (
    
    <div className="page-container">
      <Filter link="/graphs"  text="GRÁFICOS" search = {false}  />
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

                    <td id={`${record.url}/${field}`}>{processData(record[field])}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        ) : (
        <tbody>
          <tr>
            <td>AGUARDE. CARREGANDO DADOS</td><td>Se isso demorar demais, é possível que a API esteja apresentando alguma lentidão</td>
          </tr>
        </tbody>
         )
        }
      </table>
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        numberOfRecords={numberOfRecords}
      />
    </div>
  );
};

export default Data;

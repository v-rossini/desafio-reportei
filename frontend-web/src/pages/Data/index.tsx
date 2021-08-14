import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./styles.css";
import { processData } from "./helpers";
import "./types"
import { record } from "./types";

const BASE_URL = 'https://swapi.dev/api';

const DATA_DICT = {
    people: ["NOME", "ALTURA", "PESO", "GENERO", /*"ESPÉCIE", "PLANETA NATAL",*/ "QT. VEÍCULOS", "QT. NAVES", "QT. FILMES"],
    planets: ["NOME", "POPULAÇÃO" ,"P. ROTAÇÃO", "P. ORBITAL", "CLIMA", "TERRENOS", "GRAVIDADE"],
    vehicles: ["NOME", "MODELO", "CLASSE", /*"FABRICANTE"*/,"TRIPULAÇÃO", "PASSAGEIROS", "CAP. CARGA", "VEL MÁX.", "COMPRIMENTO", "QT. PILOTOS"],
    starships: ["NOME", "MODELO", "CLASSE", /*"FABRICANTE",*/ "TRIPULAÇÃO", /*"PASS.",*/ "CAP. CARGA", "HYPERDRIVE |", " MGLT |", " COMPRIMENTO |", " QT. PILOTOS"],
    films: ["TÍTULO", "N. EPISÓDIO", "DIRETOR", "PRODUTORES", "DATA DE LANÇAMENTO"],
    species: ["NOME", "CLASSIFICAÇÃO", "DESIGNAÇÃO", "TAMANHO MÉDIO", "EXPEC. VIDA", /*"PLANETA NATAL",*/ "IDIOMA", "QT. PERSONAGENS", "QT. FILMES"]

}

const FIELDS_DICT = {
    people: ["name", "height", "mass", "gender", /*"species", "homeworld",*/ "vehicles", "starships", "films"],
    planets: ["name", "population", "rotation_period", "orbital_period", "climate", "terrain", "gravity"],
    vehicles: ["name", "model", "vehicle_class", /*"manufacturer"*/, "crew", "passengers", "cargo_capacity", "max_atmosphering_speed", "length", "pilots"],
    starships:["name", "model", "starship_class", /*"manufacturer"*/, "crew", /*"passengers"*/, "cargo_capacity", "hyperdrive_rating", "MGLT", "length", "pilots"],
    films: ["title","episode_id","director","producer","release_date"],
    species:["name", "classification", "designation", "average_height", "average_lifespan", /*"homeworld",*/ "language", "people", "films"]
}

const Data = () => { 

    
    const CURRENT_SEARCH = "?page="
    const VALUE = "1"
    const DATA = "species"

    const [recordsData, setRecords] = useState<record[]>();
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [apiData, setApiData] = useState();

    
    useEffect(() => {
        axios.get(`${BASE_URL}/${DATA}/${CURRENT_SEARCH}${VALUE}`)
            .then(response => {
                setNumberOfPages(Math.ceil(response.data.count / 10))
                setRecords(response.data.results)
            } ).catch(error => console.log(error));
    }, []);
    
    
    return (
        <div className = "page-container">
            <table className = "records-table"   cellPadding = "0"   cellSpacing ="0"> 
                <thead>
                    <tr key = "DATA">
                        {
                            DATA_DICT[DATA].map(value => (
                                <th key = {value}>{value}</th>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            recordsData?.map( record => (
                                    <tr key={record.url}>
                                        {
                                            FIELDS_DICT[DATA].map(field => (
                                                <td>{processData( record[field] )}</td>
                                            ))
                                        }
                                    </tr>
                                    )
                                )

                        }
                </tbody>   
            </table>
        </div>
    );
}

export default Data;
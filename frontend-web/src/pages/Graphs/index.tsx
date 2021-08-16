import React, { useEffect, useState } from "react"
import Filter from "../../components/Filter"
import Chart from "react-apexcharts"
import { barOptions, pieOptions } from "./chart-options"
import "./types"
import "./styles.css"
import axios from "axios"
import { biggestXinY, getQuantity, MostXinY, MostXinY_Names, MostXinY_Values } from "./helpers"


const chartData = [{x: "vitor", y: 29},
                    {x: "raissa", y: 27 }]


 const pages = {
    people: "PESSOAS",
    planets: "PLANETAS",
    vehicles: "VEÍCULOS",
    starships: "NAVES",
    films: "FILMES",
    species: "ESPÉCIES"
}

const BASE_URL = "https://swapi.dev/api";





async function getApiData() {
    let data = {}
    let pageCounts = {}

    
//        console.log("buscando valores")
    await Promise.all( Object.keys(pages).map(async (key) => {
        await axios.get(`${BASE_URL}/${key}`).then(response => {
//                    console.log(`dados de ${key} obtidos`)
//                    console.log(response.data.results)
                data[key] = response.data.results;
                pageCounts[key] = Math.ceil(response.data.count / 10)
//                    console.log(`dados de ${key} processados`)
        }).then(async () => {
            for (var i = 2; i<=pageCounts[key]; i++) {
//                    console.log(`Requisitando p.${i} de ${key}`)
               await  axios.get(`${BASE_URL}/${key}/?page=${i}`).then(response => {
                    data[key] = data[key].concat(response.data.results)}).catch(err => console.log(err))
//               console.log(`p.${i} de ${key} processada`)
//                    console.log(data)
            }
        })
    }));

    


//   console.log(data)
   return data

} 

const Graphs = () => {

    const [stateData, setData] = useState( undefined )


    useEffect(() => {
        if (stateData === undefined) {
            getApiData().then(response => setData(response))
            .catch(err => console.log(err));
        }
        
        console.log(stateData)
/*
         getApiData().then (() => {
            setData ( data )
        console.log("stateData: ")    
        console.log(stateData)
        })    
*/

    }, [stateData]  );

    return (
    <div className="page-container">
        <Filter link="/Data"  text="VER TABELAS" search = {true}  />
        <div className="chart-container">
            <div className="top-related">
                <h1 className="top-related-title">Quantidades de registros:</h1>
                <div className = "games-container">
                    {
                    stateData ? (
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: getQuantity(stateData)}]}/>

                    ) : (<h1>Undefined</h1>)  
                    }                

                </div>
                <h1 className="top-related-title">Maiores planetas (diâmetro)</h1>
                <div className = "games-container">
                    {
                    stateData ? (
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: biggestXinY(stateData, "planets", "diameter", 5 )}]}/>

                    ) : (<h1>Undefined</h1>)  
                    }
                                    

                </div>
                <h1 className="top-related-title">Maiores planetas (população)</h1>
                <div className = "games-container">
                    {
                    stateData ? (
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: biggestXinY(stateData, "planets", "population", 5 )}]}/>

                    ) : (<h1>Undefined</h1>)  
                    }
                                    
                </div>

            </div>
            <div className="charts">
                <div className="platform-chart">
                    <h2 className="top-related-title">5 Personagens com mais veículos</h2>
                    <div className = "games-container">
                        {
                        stateData ? (
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "vehicles", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "vehicles", 5)}
                        width = "350"
                        />) : (<div>UNDEFINED</ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">
                    <h2 className="top-related-title">5 personagens com mais naves</h2>
                    <div className = "games-container">
                        {
                        stateData ? (
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "starships", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "starships", 5)}
                        width = "350"
                        />) : (<div>UNDEFINED</ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">
                    <h2 className="top-related-title">Personagens em mais filmes</h2>
                    <div className = "games-container">
                        {
                        stateData ? (
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "films", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "films", 5)}
                        width = "350"
                        />) : (<div>UNDEFINED</ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">
                    <h2 className="top-related-title">Planetas com mais personagens</h2>
                    <div className = "games-container">
                        {
                        stateData ? (
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "planets", "residents", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "planets", "residents", 5)}
                        width = "350"
                        />) : (<div>UNDEFINED</ div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Graphs


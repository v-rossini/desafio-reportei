import React, { useEffect, useState } from "react"
import Filter from "../../components/Filter"
import Chart from "react-apexcharts"
import { barOptions, pieOptions } from "./chart-options"
import "./types"
import "./styles.css"
import axios from "axios"
import { biggestXinY, getQuantity, MostXinY, MostXinY_Names, MostXinY_Values } from "./helpers"




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

    

    await Promise.all( Object.keys(pages).map(async (key) => {
        await axios.get(`${BASE_URL}/${key}`).then(response => {

                data[key] = response.data.results;
                pageCounts[key] = Math.ceil(response.data.count / 10)

        }).then(async () => {
            for (var i = 2; i<=pageCounts[key]; i++) {

               await  axios.get(`${BASE_URL}/${key}/?page=${i}`).then(response => {
                    data[key] = data[key].concat(response.data.results)}).catch(err => console.log(err))

            }
        })
    }));

    
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

    }, [stateData]  );

    return (
    <div className="page-container">
        <Filter link="/Data"  text="VER TABELAS" search = {true}  />
        <div className="chart-container">
            <div className="top-related">
                
                <div className = "records-container">
                    {
                    
                    stateData ? (<div>
                    <h1 className="top-related-title">Quantidades de registros:</h1>    
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: getQuantity(stateData)}]}/>
                    </div>
                    ) : (<div><h1>Carregando dados.</h1>
                        <h2>Se isso demorar, é possível que a API esteja apresentando alguma lentidão.</h2>
                        <h2>Você pode verificar o progresso das requisições na sessão "rede" das ferramentas de desenvolvedor do navegador.</h2></div>)  
                    }                

                </div>

                <div className = "records-container">
                    {
                    
                    stateData ? (
                    <div>                
                    <h1 className="top-related-title">Maiores planetas (diâmetro)</h1>
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: biggestXinY(stateData, "planets", "diameter", 5 )}]}/>
                    </div>
                    ) : (<h1></h1>)  
                    }
                                    

                </div>

                <div className = "records-container">
                    {
                    stateData ? (
                        <div>
                                            <h1 className="top-related-title">Maiores planetas (população)</h1>
                    <Chart 
                    options = {barOptions}
                    type = "bar"
                    height = "200"
                    width = "900"
                    series = {[{ data: biggestXinY(stateData, "planets", "population", 5 )}]}/>
                    </div>
                    ) : (<h1></h1>)  
                    }
                                    
                </div>

            </div>
            <div className="charts">
                <div className="platform-chart">

                    <div className = "records-container">
                        {
                        stateData ? (
                            <div>
                             <h2 className="top-related-title">5 Personagens com mais veículos</h2>
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "vehicles", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "vehicles", 5)}
                        width = "350"
                        />
                        </div>
                        ) : (<div></ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">
                    <div className = "records-container">
                        {
                        stateData ? (
                            <div>
                             <h2 className="top-related-title">5 personagens com mais naves</h2>
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "starships", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "starships", 5)}
                        width = "350"
                        />
                        </div>
                        ) : (<div></ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">

                    <div className = "records-container">
                        {
                        stateData ? (
                        <div>
                        <h2 className="top-related-title">Personagens em mais filmes</h2>
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "people", "films", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "people", "films", 5)}
                        width = "350"
                        />
                        </div>) : (<div></ div>)
                        }
                    </div>
                </div>
                <div className="platform-chart">
                    <div className = "records-container">
                        {
                        stateData ? (
                            <div>
                                 <h2 className="top-related-title">Planetas com mais personagens</h2>
                        <Chart 
                        options = {{ ...pieOptions , labels: MostXinY_Names(stateData, "planets", "residents", 5)}}
                        type = "donut"
                        series = {MostXinY_Values(stateData, "planets", "residents", 5)}
                        width = "350"
                        />
                        </div>) : (<div></ div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Graphs


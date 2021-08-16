import React from "react"
import "./styles.css"

type Props = {
    currentTab: string;
    changeTab: Function;
}

const Tabs = ({currentTab = "people", changeTab} : Props) => {

    const tabs = {
        people: "PESSOAS",
        planets: "PLANETAS",
        vehicles: "VEÍCULOS",
        starships: "NAVES",
        films: "FILMES",
        species: "ESPÉCIES"
    }

    return (
        <div className = "tab-container">
            {Object.entries(tabs).map(([key, title]) => (
                <button
                    key={key}
                    className={`tab-item ${key === currentTab ? 'active' : 'inactive'}`}
                    onClick={() => changeTab(key)}>
                    {title}
                </button>
            )
            )}

        </div>
    )
}

export default Tabs;


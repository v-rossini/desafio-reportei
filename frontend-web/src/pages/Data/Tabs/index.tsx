import React from "react"
import "./styles.css"

type Props = {
    currentTab: string;
    changeTab: Function;
}

const Tabs = ({currentTab = "people", changeTab} : Props) => {
    const tabButtons = [["people", "PESSOAS"],["planets", "PLANETAS"],["vehicles", "VEÍCULOS"],
                ["starships", "NAVES"],["films", "FILMES"],["species", "ESPÉCIES"]]

    return (
        <div className = "pagination-container">
            {tabButtons.map(item => (
                <button 
                    key={item[0]}
                    className={`pagination-item ${item[0] === currentTab ? 'active' : 'inactive'}`}
                    onClick={() => changeTab(item[0])}>
                        {item[1]}
                </button>
                )        
            )}

        </div>
    )
}

export default Tabs;


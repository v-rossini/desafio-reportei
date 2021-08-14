import React from "react"
import "./styles.css"

type Props = {
    numberOfPages?: number;
    changePage: Function;
    currentPage: number;
}

const Pages = ({numberOfPages = 1, changePage, currentPage} : Props) => {
    const pageButtons = Array.from(Array(numberOfPages).keys())

    return (
        <div className = "pagination-container">
            {pageButtons.map(page => (
                <button 
                    key={page+1}
                    className={`pagination-item ${page+1 === currentPage ? 'active' : 'inactive'}`}
                    onClick={() => changePage(page+1)}>
                        {page+1}
                </button>
                )        
            )}

        </div>
    )
}

export default Pages;


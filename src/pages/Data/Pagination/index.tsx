import React from "react"
import "./styles.css"

type Props = {
    numberOfRecords : number;
    changePage: Function;
    currentPage: number;
}

const Pagination = ({numberOfRecords = 1, changePage, currentPage} : Props) => {
    const pageButtons = Array.from(Array(Math.ceil(numberOfRecords / 10)).keys())

    return (
        <div className = "pagination-container">
            <div  className = "pagination-total">Total: {numberOfRecords}</div>
            {pageButtons.map(page => (
                <button 
                    key={page+1}
                    className={`pagination-item ${page+1 === currentPage ? 'active' : 'inactive'}`}
                    onClick={() => changePage(page+1)}>
                        {page+1}
                </button>
                )        
            )
            }

            
        </div>
    )
}

export default Pagination;


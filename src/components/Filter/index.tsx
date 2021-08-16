import React from 'react'
import { Link } from "react-router-dom"

type Props = {
    link: string;
    text: string;
    search: boolean;
}

const Filter = ({link, text, search}: Props) => (
    <div className="filters-container records-actions">
        <Link to={link}>
            <button className="action-filters">
                {text}
            </button>
        </Link>
    </div>
)

export default Filter
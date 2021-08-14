import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/';

export function fetchData (DATA: string, FILTER: "?page=" | "?search=", VALUE: string) {
    return axios.get(`${BASE_URL}/${DATA}/${FILTER}${VALUE}`);
}

export  function processData(text: string | Array<string>) {
    if (Array.isArray(text))
        return (text.length > 0) ? text.length : "-"
    else
        return text

}



export function getNumberOfPages(url: string) {
/*
    axios.get(url).then((response) => {response ? Math.ceil(response.data.count / response.data.results.length) : "1" })
    return "0"
*/
}

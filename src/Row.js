import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./row.css"

const Row = ({ tittle , fetchUrl,isLargeRow}) => {
    const [movies, setmovies] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
//    console.table(movies);
    return (
        <div className="row">
            {/* tittle of the row */}
            <h1>{tittle}</h1>
            {/* poster of films in row */}
            <div className="row_posters">
            {movies.map(movie => {
              return  < img key={movie.id} className={`row_poster ${isLargeRow && "row_posterlarge"}`} src={`${baseURL}${ isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                 })}
            </div>
        </div>
    )
}

export default Row;

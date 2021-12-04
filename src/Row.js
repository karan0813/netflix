import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


const Row = ({ tittle , fetchUrl,isLargeRow}) => {
    const [movies, setmovies] = useState([]);
    const[trailrurl , settraierurl] = useState("")

    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);


     const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    
    const handletrailer = (movie) => {
        if (trailrurl) {
            settraierurl("")
        } else {
            movieTrailer(movie?.name || "").then((url) => {
                const urlparms = new URLSearchParams(new URL(url).search);
                settraierurl(urlparms.get("v"));

            }).catch(
                (err)=> {
               console.log(err);
            })
        }
    }



    return (
        <div className="row">
            {/* tittle of the row */}
            <h1>{tittle}</h1>
            {/* poster of films in row */}
            <div className="row_posters">
            {movies.map(movie => {
                return < img
                    key={movie.id}
                    onClick={() => handletrailer(movie)}
                    
                    className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
                 })}
            </div>
            {trailrurl && <YouTube videoId= {trailrurl} opts={opts} />}
        </div>
    )
}

export default Row;

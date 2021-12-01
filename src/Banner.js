import React, { useState,useEffect } from 'react'
import request from './request'
import axios from "./axios"
import "./banner.css"


const Benner = () => {
    const [movie, setmovie] = useState([]);

  useEffect(() => {
      let getdata = async() => {
          let bannerdata = await axios.get(request.fetchNetfilxOriginals);
          setmovie(bannerdata.data.results[Math.floor(Math.random()* bannerdata.data.results.length - 1)]);
      }
      getdata();
  }, [])


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: "center center"
         }}
        >
            <div className="banner_contant">
                 {/* tittle */}
                   <h1 className="banner_tittle">{ movie?.name}</h1>
                {/* button */}
                <div className="banner_btns">
                    <button className="banner_button">play</button>
                    <button className="banner_button">My List</button>
                </div>
               
                <h1 className="banner_discription">{ movie?.overview}</h1>
                  {/* discription */}
            </div>
           
        </header>
    )
}

export default Benner

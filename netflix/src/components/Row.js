import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'

function Row({ isPoster, title , fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/"

    const [movies,setMovie] = useState([])

    const fetchData = async () =>{
        const response = await instance.get(fetchUrl)
        setMovie(response.data.results)
    }


    useEffect(()=>{
        fetchData()
    })


    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((movie) => (
                        <img
                            className={isPoster ? 'movie_poster' : 'movie'}
                            src={`${base_url}${isPoster ? movie.poster_path : movie.backdrop_path}`}
                        />
                    ))

                }

            </div>
        </div>
    )
}

export default Row
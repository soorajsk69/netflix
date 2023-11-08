import React, { useEffect, useState } from 'react'
import instance from '../instance'
import requests from '../request'
import Row from './Row'
import './Banner.css'


function Banner() {

    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movie, setMovie] = useState([])
    const [show, setshow] = useState([])

    const fetchData = async () => {
        const response = await instance.get(requests.fetchNetflixOriginals)
        setMovie(response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ])
    }

    console.log(movie);

    useEffect(() => {
        fetchData()
        window.addEventListener("scroll", () => {
            if (window.scroll > 500) {
                setshow(true)
            }
            else {
                setshow(false)
            }
        })
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str?.substr(0, n - 1) + '...' : str;
    }
    return (
        <div>

            <div className={`logo ${show && "logo_black"}`}>
                <img
                    src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
                    alt='netflix-logo' />
            </div>

            <div className='banner' style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})` }}>
                <div className='content'>
                    <h1 className='title'> {movie.name}</h1>
                    <div className='banner_button'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='discription'>{truncate(movie?.overview, 150)}</h1>

                </div>
                <div className='fade_bottom'> </div>


                <Row isPoster={'true'} title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />
                <Row title='Trending' fetchUrl={requests.fetchTrending} />
                <Row title='TopRated' fetchUrl={requests.fetchTopRated} />
                <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies} />
                <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies} />
                <Row title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies} />
                <Row title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies} />
                <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

            </div>


        </div >
    )
}

export default Banner
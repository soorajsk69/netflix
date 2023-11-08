import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [allusers, setAllusers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8000/get-all-users')
            setAllusers(result.data.users);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    console.log(allusers);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='main'>
            <div className='header'>
                <div>
                    <nav>
                        <img className='logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='netflix-logo' />
                        <div>
                            <button className='language-btn'>English <i className="fa-solid fa-angle-down"></i> </button>
                            <Link to={'/login'}>
                                <button>Sign In</button>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className='header-content'>
                    <h1> Unlimited movies, TV shows and more</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
            </div>

            <div className='features'>
                <div className='row'>
                    <div className='text-col'>
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='img-col'>
                        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='' />
                    </div>
                </div>
                <div className='row'>
                    <div className='img-col'>
                        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='' />
                    </div>
                    <div className='text-col'>
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="loading-spinner">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
            )}
        </div>
    )
}

export default Home

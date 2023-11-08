import React, { useEffect, useState } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import Spinner from './spinner/Spinner';

function Login() {

    const [addusers, setAddusers] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showSpinner,setShowSpinner] = useState(false)

    const handleAddUser = async (e) => {
        e.preventDefault()
        setId(uuid().slice(0, 3));
        const body = {
            id,
            email,
            password
        }
        console.log(body);

        if(email.length>3){
            setShowSpinner(true);

            const result = await axios.post('http://localhost:8000/add-users', body)
            setAddusers(result.data.message);
            console.log(addusers);

            setTimeout(()=>{
                setShowSpinner(false)
                window.location.href ='/banner';
            },3000)
        }else{
            alert('please enter a valid email address')
        }   
    }

    useEffect(() => {
        setId(uuid().slice(0, 3));
    }, [])

    return (
        <div className='wrapper'>
            <div className='header'>
                <div className='logo'>
                    <img
                        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
                        alt='netflix-logo' />
                </div>
            </div>
            <div className='login_body'>
                <div className='login_box'>
                    <h2>Sign In</h2>
                    <form>
                        <div className='input_wrap'>
                            <Form.Control type="text" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)}  ></Form.Control>
                        </div>
                        <div className='input_wrap'>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </div>
                        <div className='input_wrap'>
                            <Link to={'/banner'}>
                                <button onClick={(e) => handleAddUser(e)} class="btn login-button btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="login-submit-button">
                                    {showSpinner ? <Spinner/> : <>Sign In</>}
                                </button>

                            </Link>
                        </div>
                        <div className='support'>
                            <div className='remember'>
                                <span>  <Form.Control type="checkbox"></Form.Control></span>
                                <span>Remember Me</span>
                            </div>
                            <div className='need_help'>
                                Need Help?
                            </div>
                        </div>
                        <div className='sign_up'>
                            <p>New To Netflix? <a href='#'> Sign Up Now</a></p>
                        </div>
                        <div className='terms'>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Learn More</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
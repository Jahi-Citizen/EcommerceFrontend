import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function LoginForm()
{
    //Set the forms state 
    const [userData, setUserData] = useState({ 
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    function handleUsernameChange(event:any)
    {
        setUserData({
            ...userData,
            username: event.target.value
        });
    }

    function handlePasswordChange(event:any)
    {
        setUserData({
            ...userData,
            password: event.target.value
        });
    }

    function handleSubmit(event:any)
    {
        event.preventDefault();
        submitForm();
    }

    function submitForm()
    {
        axios.post('http://localhost:8080/login', userData)
        .then(response => {
            //handle successful response (display backend success message and nav)
            const message = response.data.message; 
            alert(message);
            window.location.href = '/Catalog'; 
        })
        .catch (error => {
            if (error.response)
            {
                const message = error.response.data;
                setError(message);
                console.error('API error', error);
            }
            else 
            {
                console.error('API Error: ', error);
            }
        });
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card form col-md-6">
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" name="username" className="form-control" onChange={handleUsernameChange} value={userData.username} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={handlePasswordChange} value={userData.password} />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                        <p className="mt-2">
                            Don't have an account? <Link to="/Register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
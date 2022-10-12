import React, { useState } from 'react';
import axios from "axios"

const Users = () => {

    const [user, setuser] =  useState("");

    const [gitHubUser, setgitHubUser] =  useState([]);

    const preventDefault = (e) => {
        e.preventDefault()
    }

    const getUsers = () => {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                const { data } = response
                console.log(data)
                setgitHubUser(data)
            })
    }
    return (
        <div >
            <form onSubmit={preventDefault}>
            
                <input className='mx-1 input' value={user}
                    onChange={event => setuser(event.target.value)}
                    placeholder='Incerte usuario de GitHub'></input>
                
                <button type="button"onClick={() => getUsers()} className="btn btn-success mx-1">Send</button>   
            </form>

            <div >      
                    {
                        gitHubUser.map(User => {
                            return (
                                <div className="card ">
                                    <div className="card-body app ">
                                     <a href={User.html_url}> {User.name} </a>
                                    </div>
                                </div>

                            )
                        })
                    }
            </div>
        </div>
    );
}
export default Users;

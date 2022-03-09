import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {
    const [name, setName]= useState("")
    const [room, setRoom]= useState("")
    return (
        <div className='join'>
            <div className='join-div'>
            <div className='join-form'>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Room' onChange={(e)=>setRoom(e.target.value)}/>
            <Link className='joinButton' to={`/chat?name=${name}&room=${room}`}>Join</Link>
      

            </div>      
            </div>
            
        </div>
    );
};

export default Join;
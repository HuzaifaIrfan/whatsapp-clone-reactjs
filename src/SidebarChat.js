import React, {useEffect, useState} from 'react'

import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

import db from './firebase'
import { Link } from 'react-router-dom'


function SidebarChat({id, name, addNewChat}) {
    const [Seed, setSeed] = useState('')
    const [messages, setMessages] = useState([])


    useEffect(() => {

        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot)=> setMessages(snapshot.docs.map((doc)=>doc.data())))
        }

    }, [id])

    useEffect(() => {
        
        setSeed(id)
        // return () => {
        //     setSeed(Math.floor(Math.random()*5000))
        // }

    }, [id])

    const createchat= ()=>{
        const roomName= prompt("Enter the room Name for chat")

        if(roomName){
            // Do some clever stuff!!
            db.collection('rooms').add({
                name:roomName,
            })
        }

    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="SidebarChat">
                
                <Avatar src={`https://avatars.dicebear.com/api/human/${Seed}.svg`}/>   
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>

            </div>
        </Link>
    ):
    (
        <div onClick={createchat} className="SidebarChat">

    
       
            <h2>Add new Chat</h2>
       
    </div>
    )
}

export default SidebarChat

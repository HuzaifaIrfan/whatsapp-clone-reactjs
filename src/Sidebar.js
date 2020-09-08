import React, {useEffect, useState} from 'react'

import './Sidebar.css'

import { Avatar, IconButton} from '@material-ui/core'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';



import SidebarChat from './SidebarChat'

import db from './firebase'

import {useStateValue} from './StateProvider'

function Sidebar() {

    const [{user}, dispatch] = useStateValue()

    const [Rooms, setRooms] = useState([])

    const unSubscribe = () =>{
        db.collection('rooms').onSnapshot(snapshot =>{
            setRooms(snapshot.docs.map(doc=>{
                return{
                    id:doc.id,
                    data:doc.data(),
                }
            }))
        })
    }

    useEffect(() => {
        

        
        unSubscribe()


    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar src={user?.photoURL}/>

                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
         
                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or Start a new Chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {
                    Rooms.map(room=>{
                        return(<SidebarChat key={room.id} id={room.id} name={room.data.name}/>)
                    })
                }
                
            </div>
            
        </div>
    )

}

export default Sidebar

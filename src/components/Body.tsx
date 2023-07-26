import React, { useEffect, useState } from 'react'
import { createSocketConnection } from '../utils/socket';
import { SocketEventHandler } from '../utils/eventHandlers';

//When client authenticates using Keeper Wallet 
// get result from state.
// if the wallet is initialized and locked is false connect to chat server


export const Body = ()=>{
  let eventHandler: SocketEventHandler
    const [data, setData] = useState(null)
    // const [refreshKey, setRefreshKey] = useState(0);
    

    useEffect(() => {
      const rooms = JSON.parse(localStorage.getItem("rooms") || "[]")
      setData( data => data = rooms)
    }, [])

   
      function startWatchParty() {
        console.log("Button clicked");
        eventHandler = createSocketConnection();
                
      }
      function createRoom(){
        console.log("create room clicked")
        eventHandler.createRoom();
        
      }

      const getRooms = ()=>{
        console.log("get rooms clicked")
        eventHandler.getRooms()
        setTimeout(() => {
          window.location.reload();
          console.log('data', data);
        }
        , 2000)
        
        
      }

      const joinRoom = ()=>{
        console.log("join room clicked");
        
        eventHandler.joinRoom('1234')      
      }
    return (
        <div>
          <button onClick={startWatchParty}>start watch party</button> 
          <button onClick={createRoom}>createRoom</button>
          <button onClick={getRooms}>getRooms</button>
          <button onClick={joinRoom}>joinRoom</button>
        </div>
    )
}
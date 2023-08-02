import React from 'react'
import styles from "./Chat.module.css"
import {BsArrowRightSquare, BsChatLeftDots, BsPeople } from "react-icons/bs";
import { AiOutlineSetting,AiOutlineSend } from "react-icons/ai";

function Chat() {
  return (
    <div className={styles.chat_main_container}>
            <div className={styles.chat_name_box}>
            <div className={styles.search_container}>
                 <div className={styles.now_watching}>
                        <h3>My name is:</h3>
                 </div>
                 <div className={styles.input_search}>
                         <input type='search' placeholder='Enter name'/>
                         <BsArrowRightSquare className={styles.search_icon}/>
                 </div>
            </div>
    </div>


{/* ===========CHAT BOX  HEADER ============= */}
     <div className={styles.chat_box_header}>
         <div className={styles.active}>
                 <h3><BsChatLeftDots  className={styles.icon}/>  Chat</h3>
         </div>
         <div>
                 <h3><BsPeople  className={styles.icon}/>People</h3>
         </div>
         <div>
                  <h3><AiOutlineSetting className={styles.icon}/>Setting</h3>
         </div>
     </div>

{/* =========== CHAT DISPLAY=========== */}
<div className={styles.chat_box_display}>
       <div className={styles.chat_display}>
       <div className={styles.logo_with_name}>
             <h1>FE</h1>
       </div>
       <div>
               <div>
                        <div className={styles.name_and_time}>
                        <h3>festus</h3>
                        <p>04:56:21 @ 01:00</p>
                        </div>
                        <p className={styles.message}>hahahahahhahahahahah</p>
               </div>
       </div>
       </div>
    </div>
    <div className={styles.chat_input}>
      <form className={styles.input_enter_message}>
           <input type='text' placeholder='Enter message'/>
           <button className={styles.submit}><AiOutlineSend class = {styles.submit_icon}/></button>
      </form>
  </div>
    </div>
  )
}

export default Chat

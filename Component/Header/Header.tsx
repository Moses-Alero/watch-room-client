'use client'
import React from 'react'
import styles from "./header.module.css"
import { BsUpload} from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useAppDispatch} from '@/app/hooks';
import { videoURL } from '../features/videoInputSlice';
function Header() {
  const dispatch = useAppDispatch()
  function onChangeUrl(event:any){
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    dispatch(videoURL(url))
  }
  return (
    <div>
          <div className={styles.nav_bar}>
              <div className='logo'>
                 <h2>WatchParty</h2>
            </div>

               <div className={styles.user_activity}>
                   <button className={styles.create_room}><i><AiOutlineFileAdd className={styles.icon}/>Create room</i></button>
                 <button className={styles.upload_movie}><i>
                  <BsUpload className={styles.icon}/>Upload Movie</i>
                  <input type='file' className='input_file' onChange={(e) => onChangeUrl(e)}/>
                  </button>
               </div>
          </div>
    </div>
  )
}
export default Header

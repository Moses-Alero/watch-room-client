'use client'

import React from 'react'
import styles from "./Video.module.css"
import {RiPlayListAddLine} from "react-icons/ri";
import {BsArrowRightSquare } from "react-icons/bs";
import {useAppSelector } from '@/app/hooks';
function Video() {
  const videoURL = useAppSelector(state => state.url.videoURL)
  return (
    <div className={styles.video_container}>
              <div className={styles.search_container}>
                 <div className={styles.now_watching}>
                        <h3>Now watching:</h3>
                 </div>
                 <div className={styles.input_search}>
                         <input type='search' placeholder='Enter URL, Youtube'/>
                         <BsArrowRightSquare className={styles.search_icon}/>
                 </div>
                   <div className={styles.add_play_list}><h3><RiPlayListAddLine className={styles.icon}/>playlist(0)</  h3></div>
               </div>
                <video className={styles.videoPlayer} width="900" height="400"controls src={videoURL}>
                  <b>Video not supported by your browser</b>
                </video>
    </div>
  )
}

export default Video

"use client";

import React, { useContext } from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {theme,themeToggle} = useContext(ThemeContext);
  
  return (
    <div className={styles.container} style={theme == 'dark' ? {backgroundColor:'white'} : {backgroundColor:'black'}} onClick={themeToggle}>
        <Image src={'/moon.png'} alt='moon' width={14} height={14}/>
        <div className={styles.ball} style={theme == 'dark' ? {left : 1,backgroundColor:'#f172a'} : {right:0,backgroundColor:'white'}}></div>
        <Image src={'/sun.png'} alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
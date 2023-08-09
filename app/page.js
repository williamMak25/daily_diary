"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Icon, Stack, Typography } from '@mui/material';
import { Inter } from 'next/font/google'
import Createnote from "./createnote/page"


export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Wellcome from Note Note</h1>
    </div>
  )
}

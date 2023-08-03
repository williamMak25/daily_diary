"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Icon, Stack, Typography } from '@mui/material';
import { Inter } from 'next/font/google'
import Createnote from "./createnote/page"

export const runtime = "edge"
export default function Home() {
 const imageURL = "https://i.ibb.co/ZMgSBWp/monstera-leaf-frame-grid-paper-background.jpg"
  return (
    <Stack justifyContent="center" alignItems="center" width="100%" height="100vh" 
    sx={{
    backgroundImage:`url(${imageURL})`, 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    fontFamily:"sans-serif"
    }} >
        <HistoryEduIcon sx={{fontSize:'195px',color:"yellow"}}/>
        <Typography variant='h2' color="blue">Note Note</Typography>
    </Stack>
  )
}

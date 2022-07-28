import Head from 'next/head'
import Coaches_form from './coaches/coaches_form'
import Navbar from './components/navbar'
import Image from 'next/image'
import { Grid } from '@mui/material'
import Getstarted_button from './components/getstarted_button'
import home from '../public/home.png'
import {Box} from '@mui/material'


export default function Home() {
  return (
   
    <div>
    <Navbar />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} columns={18}>
        <Grid item xs={8}>
        <h1 style = {{ marginTop:"9rem", marginLeft:"6rem" }}>Welcome</h1>
    <p style={{ marginLeft:"6rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur, <br /> incidunt recusandae nulla voluptatum quis obcaecati magnam doloribus quidem neque voluptates, <br /> nostrum dolorum dolores provident sed similique a natus error.</p>
    <Getstarted_button/>
        </Grid>
        <Grid item xs={8}>
        <Image
    style= {{ marginLeft:"8rem" }}
    src={home}
    layout="responsive"
    width={40}
    height={40}
    />
        </Grid>
      </Grid>
    </Box>

    </div>
      
  )
}

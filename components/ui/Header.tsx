import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';
import React from 'react'

import styles from '../../styles/Header.module.css';

export const Header = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 5}}>

        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
          <Box display='flex' flexDirection='column' mt={1}>

            <Typography variant='h1' component='h1' align='center'>Importadores Directos</Typography>
            <Typography variant='subtitle2' component='h6' align='center'>Lideres en el mercado desde 1997</Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant='body2' align='center'>Trabajamos para brindarte no solo un servicio superior sino también equipos especializados con los más altos estándares en calidad, nos dedicamos a la fabricación, venta
                e importación directa de todo tipo de compresor para la industria</Typography>
            </Box>

            <Box display='flex' justifyContent='space-evenly' sx={{ mt: 3, mb: 1 }} >
                <Card sx={{ width: 90 }}>
                    <CardMedia 
                        component='img'
                        className='fadeIn'
                        image='/logo-colmar.png'
                        alt='Header1'
                    />
                </Card>
                <Card sx={{ width: 90 }}>
                    <CardMedia 
                        component='img'
                        className='fadeIn'
                        image='/simens.png'
                        alt='Header2'
                    />
                </Card>
                <Card sx={{ width: 90 }}>
                    <CardMedia 
                        component='img'
                        className='fadeIn'
                        image='/weg.png'
                        alt='Header3'
                    />
                </Card>
            </Box>

          </Box>
        </Grid>


        <Grid item xs={12} sm={ 12 } md={ 6 }>
            <Box display='flex' gap={ 2 } justifyContent='center' alignItems='center'>
                <Card sx={{ width: 180 }} className={styles.imageAnimation}>
                    <CardMedia 
                    component='img'
                    className='fadeIn'
                    image='/20hp-4.png'
                    alt='Header1'
                    />
                </Card>
                <Card sx={{ width: 130 }} className={styles.imageAnimation}>
                    <CardMedia 
                    component='img'
                    className='fadeIn'
                    image='/cabezote.png'
                    alt='Header1'
                    />
                </Card>  
                <Card sx={{ width: 180 }} className={styles.imageAnimation}>
                    <CardMedia 
                    component='img'
                    className='fadeIn'
                    image='/piston.png'
                    alt='Header1'
                    />
                </Card>
            </Box>
        </Grid>

      </Grid>
  )
}

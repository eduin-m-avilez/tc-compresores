import type { NextPage } from 'next'

import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'

import { ShopLayout } from '../components/layouts'

import { initialData } from '../database/products'
import { ProductList } from '../components/products'


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Yafe-Shop'} pageDescription={'Encuentra las mejores zapatillas aqui, todo para tu comodidad'}>
        <Typography variant='h1' component='h1'>Tienda Yafe-Shop</Typography>
        <Typography variant='h2' sx={{ marginBotton: 1 }}>Todos los Productos</Typography>

        <ProductList products={ initialData.products as any } />

    </ShopLayout>
  )
}

export default Home

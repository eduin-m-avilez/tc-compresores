import type { NextPage } from 'next'

import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'

import { ShopLayout } from '../components/layouts'

import { initialData } from '../database/products'
import { HomeCardList, ProductList } from '../components/products'
import { initialCard } from '../database/cardHome'

import { Header } from '../components/ui'



const Home: NextPage = () => {
  return (
    <ShopLayout title={'TC-Compresores | Home'} pageDescription={'Compresores de tornillo, compresores de piston redes neumaticas'}>
      
        <Header/>

        {/* <ProductList products={ initialData.products as any } /> */}
        <HomeCardList cards={ initialCard.carts as any }/>

    </ShopLayout>
  )
}

export default Home

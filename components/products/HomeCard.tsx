import { FC } from 'react';

import NextLink from 'next/link';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography, Box } from '@mui/material';

import { ICard } from '../../interfaces';


interface Props {
 card: ICard;
}

export const HomeCard: FC<Props>  = ({ card }) => {
  return (
    <Grid item xs={12} sm={6} md={ 4 } lg={3}>
        <Card >
          <NextLink href={`/products/${ card.url }`} passHref prefetch={ false }>
                <Link>
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            height="180"
                            className='fadeIn'
                            image={`products/${ card.image }`}
                            alt={ card.title }
                        />

                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" align='center' fontSize={16}>
                            { card.title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={500} align='center'>
                            { card.description }
                        </Typography>
                        </CardContent>

                    </CardActionArea>
                </Link>
              </NextLink>
            <CardActions  sx={{ justifyContent: 'center'}}>
                <NextLink href={`/products/${ card.url }`}  passHref>
                    <Link >
                        <Button size="small" >
                            Ver Productos
                        </Button> 
                    </Link>
                    </NextLink>    
            </CardActions>
        </Card>
    </Grid>
  )
}

import { FC } from 'react';

import { Grid } from '@mui/material';

import { HomeCard } from './HomeCard';

import { ICard } from '../../interfaces';

interface Props {
    cards: ICard[];
}

export const HomeCardList: FC<Props> = ({ cards }) => {
  return (
    <Grid container spacing={4} >
        {
            cards.map( card => (
                <HomeCard 
                    key={ card.image }
                    card={ card }
                />
            ))
        }
    </Grid>
  )
}

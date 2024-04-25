// Home.js
import React from 'react';
import CardData from './CardData';
import { Grid, Typography } from '@mui/material';
import data from '../data/data.js'; 
import CardDataSm from './CardDataSm.jsx';

const Home = () => {
  console.log("daata",data.imageData[1]);
  console.log("daata", data.imageData[1].dataScienceCard.pic);
  return (
    <div>
    <Grid container className="container-top">
    <Grid item xs={12} className='margin'>
    <Typography variant='h5' className='font-pop-bold'>Most Recent Articles</Typography>
    </Grid>
    <Grid item container className='justify-content'>
    <Grid item xs={6}>
    <CardData probs={data.imageData[0].fullStackCard}/>
    
    </Grid>
    <Grid item  xs={6}>
    <CardDataSm probs={data.imageData[1].dataScienceCard} />
    <CardDataSm probs={data.imageData[2].dataScienceCard} />
    <CardDataSm probs={data.imageData[3].dataScienceCard} />

    </Grid>

    </Grid>
      
      </Grid>
    </div>
  );
}

export default Home;

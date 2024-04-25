import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pic from '../asset/pic (1).jpg'

export default function CardData({probs}) {
  console.log("ddddddddddddddddddddd",probs)
  
  const navigate = useNavigate();
  const handleChange=()=>{
    
    navigate(probs.navigate);
  }
  
  const style={maxWidth:probs.maxWidth,margin:probs.margin,padding:"6px"}
  // const cardBodyStyle={height:probs.maxWidth,margin:probs.margin}
  return (
    <Card sx={style}>
      <CardActionArea onClick={handleChange}>
        <CardMedia
          component="img"
          height={probs.height}
          image={probs.pic}
          alt="green iguana"
          style={{borderRadius:"14px"}}
        />
        <CardContent>
        <Grid >
        <Typography gutterBottom variant="h6" component="div" className='font-pop-bold' >
            {probs.cardHead}
          </Typography>
          
        </Grid>
          
<Grid  sx={{ height:probs.bodyHeight }}>
<Typography variant="body2" color="text.secondary" className='font-pop' style={{fontSize:"larg"}}>
            {probs.cardBody}
          </Typography>
</Grid>
          
          <Grid container className='margin-top' >
            <Grid item xs={6}><Typography variant="body2" color="text.secondary" className='font-pop'>
            {probs.dateUpdate}
          </Typography></Grid>
            <Grid item xs={6}><Typography variant="body2" color="text.secondary" className='font-pop text-end' >
            {probs.readTime}
          </Typography></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
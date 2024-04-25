import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function CardDatSm({probs}) {
  console.log("ddddddddddddddddddddd",probs)
  
  const navigate = useNavigate();
  const handleChange=()=>{
    
    navigate(probs.navigate);
  }
  
  const style={maxWidth:probs.maxWidth,margin:probs.margin}
  // const cardBodyStyle={height:probs.maxWidth,margin:probs.margin}
  return (
    <Card sx={style}>
      <CardActionArea onClick={handleChange}>
     
      <Grid container >
      <Grid item xs={5}>
      <CardMedia
          component="img"
          height={probs.height}
          image={probs.pic}
          alt="green iguana" style={{padding:"6px",borderRadius:"14px"}}
        />
      </Grid>
      <Grid item xs={7}>
      <CardContent>
        <Grid >
        <Typography gutterBottom variant="h6" component="div" className='font-pop-bold'>
            {probs.cardHead}
          </Typography>
          
        </Grid>
          
<Grid  sx={{ height:probs.bodyHeight }}>
<Typography variant="body2" color="text.secondary" className='font-pop' >
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
      </Grid>
       
        
        </Grid>
      </CardActionArea>
    </Card>
  );
}
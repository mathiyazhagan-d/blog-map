


import React, { useState } from 'react';
import { Card, CardMedia, Grid, Tab, Tabs, Box } from '@mui/material';
import pic1 from '../asset/fullStack/Full Stack .png';
import pic2 from '../asset/fullStack/React PAth.png';
import pic3 from '../asset/fullStack/frontend.png';
import pic4 from '../asset/fullStack/backend.png';
import pic5 from '../asset/fullStack/junior (1).png';
import pic6 from '../asset/fullStack/middle.png';
import pic7 from '../asset/fullStack/senior.png';


const Career = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <div>


      <Grid container>
        <Grid item xs={3} >
        <Grid item className='container-top'>
        <Card>
        <Tabs
            orientation="vertical"
            // variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Full Stack Development Tabs"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Full Stack" />
            <Tab label="React PAth" />
            <Tab label="Front End" />
            <Tab label="Back End" />
            <Tab label="Junior Level" />
            <Tab label="Middle Level" />
            <Tab label="Senior Level" />
          </Tabs>
        </Card>
        
        </Grid>
         
        </Grid>
        <Grid item xs={9} style={{marginTop:"-20px"}}>
          {images.map((img, index) => (
            <TabPanel value={value} index={index} key={index}>
              <Card style={{ margin: '6px' }}>
                <CardMedia component="img" alt={`Pic ${index + 1}`} height="auto" image={img} />
              </Card>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`fullstack-tabpanel-${index}`}
      aria-labelledby={`fullstack-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};


export default Career;

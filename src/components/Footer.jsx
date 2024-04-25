import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Grid container className="footer color-white" sx={{ background: 'black', color: 'white', padding: '20px' }}>
      <Grid item xs={4} className="footer-section">
        <Button component={Link} to="/" variant="text" className="footer-link font-pop font-color-white">Home</Button>
      </Grid>

      <Grid item xs={4} className="footer-section">
      <Button component={Link} to="/fullstack" variant="text" className="footer-link font-pop font-color-white">Full Stack Development</Button>
      <Button component={Link} to="/datascience" variant="text" className="footer-link font-pop font-color-white">datascience</Button>
      </Grid>

      <Grid item xs={4} className="footer-section">
      <Button component={Link} to="/cybersecurity" variant="text" className="footer-link font-pop font-color-white">cybersecurity</Button>
      <Button component={Link} to="/career" variant="text" className="footer-link font-pop font-color-white">Career</Button>

      </Grid>

      <Grid item xs={12}>
        <Typography align="center" variant="body2" sx={{ marginTop: 2 }}>
          &copy; Mathiyazhagan
        </Typography>
      </Grid>
    </Grid>
    
    </>
    
  );
}

export default Footer;

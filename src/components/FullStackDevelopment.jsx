import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import fullStackImage from '../asset/fullStack/React PAth.png';

const FullStackDevelopment = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Full Stack Development
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              What is Full Stack Development?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Full Stack Development involves building both the front-end (client-side) and back-end (server-side) components of web applications.
            </Typography>
            <Typography variant="body1" gutterBottom>
              It requires proficiency in technologies such as HTML, CSS, JavaScript for the front-end, and languages/frameworks like Node.js, Express.js, Python, Ruby on Rails, or Django for the back-end.
            </Typography>
          </section>

          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Importance of Full Stack Development
            </Typography>
            <Typography variant="body1" gutterBottom>
              Full Stack Developers have a comprehensive understanding of how the entire web development process works, making them versatile and valuable assets to any team or project.
            </Typography>
            <Typography variant="body1" gutterBottom>
              They can work on both front-end and back-end tasks, communicate effectively with team members, and contribute to all stages of the development lifecycle.
            </Typography>
          </section>

          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Career Opportunities in Full Stack Development
            </Typography>
            <Typography variant="body1" gutterBottom>
              Full Stack Development offers a wide range of career opportunities, including roles such as Full Stack Developer, Web Developer, Software Engineer, and Technical Lead.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Full Stack Developers are in high demand as they possess a diverse skill set that allows them to tackle various aspects of web development projects.
            </Typography>
          </section>
        </Grid>
        <Grid item xs={6}>
          <img src={fullStackImage} alt="Full Stack Development" style={{ width: '100%', marginBottom: '20px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FullStackDevelopment;

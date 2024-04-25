import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import cybersecurityImage from '../asset/pic (9).jpg'; // Assuming you have an image file named cybersecurity_image.jpg in the images folder

const CyberSecurity = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Cybersecurity
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              What is Cybersecurity?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cybersecurity involves protecting computer systems, networks, and data from cyber attacks, unauthorized access, and data breaches.
            </Typography>
            <Typography variant="body1" gutterBottom>
              It includes techniques such as encryption, firewalls, intrusion detection systems, and vulnerability assessments to ensure the security and integrity of digital assets.
            </Typography>
          </section>

          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Importance of Cybersecurity
            </Typography>
            <Typography variant="body1" gutterBottom>
              With the increasing reliance on digital technologies, cybersecurity has become essential for protecting sensitive information, maintaining trust, and ensuring business continuity.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cybersecurity helps organizations safeguard their data, prevent financial losses, comply with regulations, and protect their reputation.
            </Typography>
          </section>

          <section sx={{ marginBottom: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Career Opportunities in Cybersecurity
            </Typography>
            <Typography variant="body1" gutterBottom>
              The field of cybersecurity offers diverse career opportunities, including roles such as Security Analyst, Penetration Tester, Security Engineer, Cybersecurity Consultant, and Chief Information Security Officer (CISO).
            </Typography>
            <Typography variant="body1" gutterBottom>
              Professionals in cybersecurity need a strong understanding of networking, encryption, risk management, and regulatory compliance.
            </Typography>
          </section>
        </Grid>
        <Grid item xs={6}>
          <img src={cybersecurityImage} alt="Cybersecurity" style={{ width: '100%', marginBottom: '20px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CyberSecurity;

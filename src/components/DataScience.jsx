import React from 'react';
import { Container, Typography } from '@mui/material';
import dataScienceImage from '../asset/pic (6).jpg';

const DataScience = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Data Science
      </Typography>
      <img src={dataScienceImage} alt="Data Science" style={{ width: '100%', marginBottom: '20px' }} />
      <section sx={{ marginBottom: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          What is Data Science?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Data Science is an interdisciplinary field that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.
        </Typography>
        <Typography variant="body1" gutterBottom>
          It involves various techniques such as data cleaning, data preprocessing, data analysis, machine learning, and data visualization.
        </Typography>
      </section>

      <section sx={{ marginBottom: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Tools and Technologies
        </Typography>
        <Typography variant="body1" gutterBottom>
          Data Scientists use tools like Python, R, SQL, and libraries like Pandas, NumPy, TensorFlow, and Scikit-learn to perform their tasks.
        </Typography>
      </section>

      <section sx={{ marginBottom: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Career Opportunities
        </Typography>
        <Typography variant="body1" gutterBottom>
          Data Science offers a wide range of career opportunities in various industries such as technology, healthcare, finance, and e-commerce.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Roles in Data Science include Data Analyst, Data Engineer, Machine Learning Engineer, and Data Scientist.
        </Typography>
      </section>

      <section sx={{ marginBottom: 4 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Future Trends
        </Typography>
        <Typography variant="body1" gutterBottom>
          In the next five years, Data Science is expected to continue growing rapidly, with increased demand for skilled professionals across industries.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Emerging trends include the integration of AI and machine learning into more business processes, increased focus on ethical data practices, and the rise of specialized roles such as AI ethicists and data privacy officers.
        </Typography>
      </section>
    </Container>
  );
};

export default DataScience;

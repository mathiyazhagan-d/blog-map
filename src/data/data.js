import pic1 from '../asset/pic (1).jpg';
import pic2 from '../asset/pic (2).jpg';
import pic3 from '../asset/pic (3).jpg';
import pic4 from '../asset/pic (4).jpg';

const data = [{ h: "this data" }];

const imageData = [
  {
    fullStackCard: {
      pic: pic1,
      cardHead: "Career",
      cardBody: "Embarking on a professional journey entails ongoing learning and skill development. Individuals navigate opportunities that align with their personal goals, fostering growth and adaptability. This dynamic process involves seizing chances for advancement and staying attuned to evolving career landscapes. Through a commitment to lifelong learning, professionals shape a fulfilling and purposeful trajectory.",
      dateUpdate: "10-11-2023",
      readTime: "19 minutes",
      height: "350",
      navigate: '/career',
      maxWidth: 800,
      margin: "10px",
      bodyHeight:"200px"
    }
  },
  {
    dataScienceCard: {
      pic: pic2,
      cardHead: "Data Science",
      cardBody: " Data science involves extracting insights and knowledge from large volumes of data. Data scientists use a combination of statistical analysis, machine learning, and programming skills to analyze and interpret data.",
      dateUpdate: "10-11-2023",
      readTime: "19 minutes",
      height: "200",
      navigate: '/datascience',
      maxWidth: 800,
      margin: "10px",
      bodyHeight:"100px"
    }
  },
  {
    dataScienceCard: {
      pic: pic3,
      cardHead: "Full Stack Development",
      cardBody: "Full-stack development involves creating and maintaining both the frontend (user interface) and backend (server-side logic and databases) of a software application.",
      dateUpdate: "10-11-2023",
      readTime: "19 minutes",
      height: "200",
      navigate: '/fullstack',
      maxWidth: 800,
      margin: "10px",
      bodyHeight:"100px"
    }
  },
  {
    dataScienceCard: {
      pic: pic4,
      cardHead: "Cyber Security",
      cardBody: "Cybersecurity protects systems, networks, and data from unauthorized access, employing various practices and technologies to ensure information security and integrity.",
      dateUpdate: "10-11-2023",
      readTime: "19 minutes",
      height: "200",
      navigate: '/cybersecurity',
      maxWidth: 800,
      margin: "10px",
      bodyHeight:"100px"
    }
  }
];

export default { imageData, data };

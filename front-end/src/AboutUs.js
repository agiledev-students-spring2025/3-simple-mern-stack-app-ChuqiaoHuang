import './AboutUs.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

const AboutUs = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then((res) => {
        setName(res.data.name);
        setIntro(res.data.info); 
        setImageUrl(res.data.photoURL); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <>
      <h1>About Us</h1>
      <span>
        <img src={imageUrl} />
        <h2>{name}</h2>
        {intro.map((para, i) => (
          <p key={i}>{para}</p> 
        ))}
      </span>
    </>
  );
};

// make this component available to be imported into any other file
export default AboutUs; 

import './AboutUs.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

const AboutUs = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutUs`)
      .then((res) => {
        setName(res.data.name);
        setIntro(res.data.info);
        setImageUrl(res.data.photoURL);
      })
  })

  return (
    <>
      <h1>About Us</h1>
      <span>
        <img src={imageUrl} />
        <h2>{name}</h2>
        <p>{intro}</p>
      </span>
    </>
  )
}
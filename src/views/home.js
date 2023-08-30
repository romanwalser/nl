import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Blues Smar Rose</title>
        <meta property="og:title" content="Blues Smar Rose" />
      </Helmet>
      <a
        href="https://nlpl1.chuimain.online/"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/Nlbutton.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home

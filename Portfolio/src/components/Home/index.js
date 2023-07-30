import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo_P.png'
import Logo from './Logo'
import logo from '../../assets/images/person.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterClass2, setLetterClass2] = useState('text-animate')

  const nameArray = ['r', 'a', 't', 'h', 'v', 'i', 'r','a','j']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
      setLetterClass2('text-animate-over')
    }, 4000)
  }, [])

  return (
    <>
      <div className="pagecontainer home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <span className={letterClass} id="firstletter" >P</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass2}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <img
        className="solid-logo"
        src={logo}
        alt="JavaScript,  Developer"
      />
      </div>

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home

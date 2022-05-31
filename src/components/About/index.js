import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  useEffect(() => {
    return () => timer
  }, [timer])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
              idx={15}
            />
          </h1>
          <p>
            Soy una desarrolladora front-end con muchísimas ganas de seguir
            aprendiendo y estar siempre al día de las últimas novedades en
            cuanto al mundo IT.
          </p>
          <p align="LEFT">
            Soy una persona muy creativa, que le gusta siempre dar su toque a
            todo lo que hace. Soy tranquila y muy trabjadora, además de
            organizada y constante.
          </p>
          <p>
            Si tuviera que definirme con una frase, diría que soy una persona
            muy familiar, que le encanta el diseño y la moda y que ha encontrado
            su nueva pasión en la programación, ¡me puedo pasar horas delante
            del ordenador sin darme cuenta!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#90C53F" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

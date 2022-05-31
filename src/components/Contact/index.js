import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  useEffect(() => {
    return () => timer
  }, [timer])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5y8nf8s',
        'template_d7fqplc',
        form.current,
        'NB8WFB2S91crerp5V'
      )
      .then(
        () => {
          alert('Mensaje enviado con éxito.')
          window.location.reload(false)
        },
        () => {
          alert('Error al enviar mensaje, por favor, inténtalo de nuevo')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Estoy interesada en cualquier proyecto que me haga crecer como
            programadora, si tienes alguna sugerencia o comentario, no dudes en
            ponerte en contacto conmigo utilizando el formulario.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const { PASS_EMAIL, EMISOR_EMAIL } = process.env

const verify = 'http://localhost:5173'
// const verify = 'https://formwapp.vercel.app'

export const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMISOR_EMAIL,
    pass: PASS_EMAIL
  }
})

export const emailReceiver = ({ name, email, token }) => {
  const data = {
    from: name,
    to: email,
    subject: 'Verificacion de correo',
    html: `
            <p>Hola ${name}, verifica tu correo en el sifuiente enlace.</p>
            <a href="${verify}/user/verified/id/${token}">https://formwapp.vercel.app/user/verified/id/${token}</a>
        `
  }
  return data
}

// =========== Ejemplo de Html en Nodemailer
// <img src="https://img.freepik.com/fotos-premium/fondo-naturaleza-refrescante-bokeh_948265-2082.jpg" alt="Bolsillo-Feliz" width="400"/>
// <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="Videogames-Web" width="400"/>
// `
// <p>Hola, me emociona postularme para el puesto en ${company}, tal como se anunció en Linkedin.</p>
// <p>Soy Daniel Martel graduado en SoyHenry bootcamp como Desarrollador Web Full-Stack, y estoy emocionado por la posibilidad de unirme a ${company} como ${job}<br>
// En el Front-End, domino JavaScript, React.js y Redux, lo que me permite crear interfaces de usuario atractivas y funcionales. En el Back-End, tengo experiencia con Express y Sequelize, diseñando API sólidas. Además, he trabajado con PostgreSQL en la gestión de bases de datos.</p>
// <p>Estoy ansioso por aplicar mis habilidades y pasión por el desarrollo web en ${company}.</p>
// <p>Adjunto mi currículum y proyectos en los que he participado para obtener más detalles sobre mi experiencia.</p>
// <p>Estoy disponible para una charla en detalle sobre cómo puedo contribuir al equipo de desarrollo.</p>
// <p>Gracias por su tiempo y consideración.</p>
// <br>
// <p>Proyectos</p>
// <p>Proyecto individual: <a href="https://videogames-terry.vercel.app">Videogames-Web</a></p>
// <img src="cid:videogames" alt="Videogames-Web" width="400"/>
// <br>
// <p>Proyecto Grupal: <a href="https://bolsillo-feliz.vercel.app">Bolsillo Feliz</a></p>
// <img src="cid:bolsillo-feliz" alt="Bolsillo-Feliz" width="400"/>
// `,

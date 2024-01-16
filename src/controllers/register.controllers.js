import { emailReceiver, contactEmail } from '../helpers/nodeMailer.js'
import { createUser } from '../helpers/register.helpers.js'

export const postRegister = async (req, res) => {
  const body = req.body
  try {
    // retorna un objeto con los datos a enviar
    const creatingUser = await createUser(body)

    // aqui se envia el Email de verificación
    const emailData = emailReceiver(creatingUser)
    contactEmail.sendMail(emailData, (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Eviando correctamente')
      }
    })
    // lo de arriba es apra enviar el Email de verificación

    delete creatingUser.token
    res.status(200).send({ details: creatingUser })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

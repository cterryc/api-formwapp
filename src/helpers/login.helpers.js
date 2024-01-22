import Users from '../models/register.models.js'
import bcrypt from 'bcrypt'
import { verifyLogin } from './verifyLoginRegister.js'

export async function getUserByEmail (comparing) {
  const verify = verifyLogin(comparing)
  if (verify.length > 0) {
    return { details: { error: verify }, status: 401 }
  }
  const { email, password } = comparing
  const userByEmail = await Users.findOne({
    where: {
      email
    },
    attributes: { exclude: ['token'] }
  })
  if (userByEmail) {
    const passwordMatch = await bcrypt.compare(password, userByEmail.password)

    if (passwordMatch) {
      const withoutPass = await Users.findOne({
        where: {
          email
        },
        attributes: { exclude: ['token', 'password', 'hashgoogle'] }
      })
      return { details: withoutPass, status: 200 }
    } else {
      return { details: { error: 'Datos incorrectos' }, status: 401 }
    }
  } else {
    return { details: { error: 'Datos incorrectos' }, status: 401 }
  }
}

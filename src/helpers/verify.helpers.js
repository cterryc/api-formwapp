import Users from '../models/register.models.js'
import bcrypt from 'bcrypt'
import { verifyLogin } from './verifyLoginRegister.js'

export const helperVerify = async (comparing) => {
  const verify = verifyLogin(comparing)
  if (verify.length > 0) {
    return { details: { error: verify }, status: 401 }
  }
  const { email, password } = comparing
  const userByEmail = await Users.findOne({
    where: {
      email
    }
  })
  if (userByEmail) {
    const passwordMatch = await bcrypt.compare(password, userByEmail.password)

    if (passwordMatch) {
      if (userByEmail.verified) {
        return { details: userByEmail, status: 200 }
      }
    } else {
      return { details: { error: 'Datos incorrectos' }, status: 401 }
    }
  } else {
    return { details: { error: 'Datos incorrectos' }, status: 401 }
  }
}

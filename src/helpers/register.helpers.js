import Users from '../models/register.models.js'
import { verifyRegister } from './verifyLoginRegister.js'

export const createUser = async (userFromBody) => {
  const userByEmail = await Users.findOne({
    where: {
      email: userFromBody.email
    }
  })
  if (userByEmail) {
    return { error: 'El correo ya está siendo utilizado' }
  }
  try {
    const verify = verifyRegister(userFromBody)
    if (verify.length > 0) {
      return ({ error: verify })
    }
    const creatingUser = await Users.create(userFromBody)

    // La función get() se utiliza en combinación con { plain: true } para obtener una versión plana del objeto.
    // El resultado en userResponse será un objeto JavaScript simple con solo los datos del usuario,
    // sin las propiedades y métodos específicos de Sequelize.
    const userResponse = creatingUser.get({ plain: true })

    // Excluir los atributos 'token' y 'password' antes de enviar la respuesta
    delete userResponse.password
    delete userResponse.hashgoogle

    console.log(userResponse, 'esto es creatingUser')
    return userResponse
  } catch (error) {
    return error
  }
}

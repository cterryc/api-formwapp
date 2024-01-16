import Users from '../models/register.models.js'

export const postVerifiedEmail = async (req, res, next) => {
  const { token } = req.body
  try {
    const findEmail = await Users.findOne({
      where: {
        token
      }
    })
    if (findEmail) {
      await Users.update(
        { token: null, verified: true },
        {
          where: { id: findEmail.id }
        }
      )
      const updatedUser = await Users.findOne({
        where: { id: findEmail.id },
        attributes: { exclude: ['id', 'token', 'password', 'hashgoogle'] }
      })
      res.status(200).send({ details: updatedUser })
    } else {
      res.status(401).send({ details: { error: 'Datos Incorrectos' } })
    }
  } catch (error) {
    next(error)
  }
}

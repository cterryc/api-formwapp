import user from '../helpers/user.helper.js'

export const patchPhone = async (req, res) => {
  const { userId } = req.params
  const { body } = req
  const patchUserPhone = await user.patchPhone(userId, body)
  console.log('esto es patchUserPhone', patchUserPhone)
  res.status(200).send(patchUserPhone)
}

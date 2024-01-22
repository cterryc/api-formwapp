import Users from '../models/register.models.js'

const patchPhone = async (id, body) => {
  try {
    const patchingUser = await Users.findByPk(id)
    if (!patchingUser) {
      throw new Error('User Not Found', 404)
    }

    await patchingUser.update(body, { fields: Object.keys(body) })

    await patchingUser.save()

    return patchingUser
  } catch (error) {
    return { error }
  }
}

const user = {
  patchPhone
}

export default user

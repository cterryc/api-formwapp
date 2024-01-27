import Forms from '../models/forms.models.js'
// import Users from '../models/register.models.js'

export const createForm = async (formFromBody) => {
  try {
    console.log(formFromBody.userId)
    const findUser = await Forms.findOne({ where: { userId: formFromBody.userId } })
    console.log('entro en findUser', findUser)
    if (findUser) {
      console.log('entro en findUser', formFromBody)
      await findUser.update({ inputs: formFromBody.inputs })
      await findUser.save()
      return findUser
    } else {
      console.log('entro en else', formFromBody)
      const newForm = await Forms.create(formFromBody)
      return newForm
    }
  } catch (error) {
    return { error }
  }
}

export const findFormByToken = async (token) => {
  try {
    console.log(token)
    const findFormByToken = await Forms.findOne({ where: { token } })
    console.log('esto es findFormByToken', findFormByToken)
    return findFormByToken
  } catch (error) {
    return { error }
  }
}

export const findFormByUserId = async (userId) => {
  try {
    console.log(userId)
    const findFormById = await Forms.findOne({ where: { userId } })
    console.log('esto es findFormById', findFormById)
    return findFormById
  } catch (error) {
    return { error }
  }
}

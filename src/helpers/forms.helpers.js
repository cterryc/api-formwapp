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

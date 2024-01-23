import { createForm } from '../helpers/forms.helpers.js'

export const postForm = async (req, res, next) => {
  const { body } = req
  try {
    const createNewForm = await createForm(body)
    res.status(200).send(createNewForm)
  } catch (error) {
    res.status(500).send({ error })
  }
}

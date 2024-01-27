import { createForm, findFormByToken, findFormByUserId } from '../helpers/forms.helpers.js'

export const postForm = async (req, res, next) => {
  const { body } = req
  try {
    const createNewForm = await createForm(body)
    res.status(200).send(createNewForm)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const getFormByToken = async (req, res, next) => {
  try {
    const { token } = req.params
    const findToken = await findFormByToken(token)
    if (!findToken) {
      return res.status(400).send({ error: 'Formulario no encontrado' })
    }
    res.status(200).send(findToken)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const getFormByUserId = async (req, res, next) => {
  try {
    const { id } = req.params
    const findFormById = await findFormByUserId(id)
    if (!findFormById) {
      return res.status(400).send({ error: 'Formulario no encontrado' })
    }
    res.status(200).send(findFormById)
  } catch (error) {
    res.status(500).send({ error })
  }
}

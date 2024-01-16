import { helperVerify } from '../helpers/verify.helpers.js'

export const getVerify = async (req, res, next) => {
  console.log('entro a la ruta verify API')
  try {
    const response = await helperVerify(req.body)
    console.log(response, 'esto es response')
    console.log(response.details, 'esto es reponse en verify')
    const { details, status } = response
    res.status(status).send({ details })
  } catch (error) {
    next({ details: { error: error.message } })
  }
}

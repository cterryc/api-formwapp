import { getUserByEmail } from '../helpers/login.helpers.js'

export async function getByEmail (req, res, next) {
  const body = req.body
  console.log(body)
  try {
    // setTimeout(async () => {
    //   const response = await getUserByEmail(body)
    //   const { details, status } = response
    //   return res.status(status).json({ details })
    // }, 3000)
    const response = await getUserByEmail(body)
    const { details, status } = response
    return res.status(status).json({ details })
  } catch (error) {
    next({ details: { error: error.message } })
  }
};

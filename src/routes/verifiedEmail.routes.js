import { Router } from 'express'
import { postVerifiedEmail } from '../controllers/verifiedEmail.controllers.js'

const verifiedEmail = Router()

verifiedEmail.post('/', postVerifiedEmail)

export default verifiedEmail

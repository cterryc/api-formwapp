import { Router } from 'express'
import { getVerify } from '../controllers/verify.controllers.js'

const verify = Router()

verify.post('/', getVerify)

export default verify

import { Router } from 'express'
import { postRegister } from '../controllers/register.controllers.js'

const register = Router()

register.post('/', postRegister)

export default register

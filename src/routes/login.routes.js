import { Router } from 'express'
import { getByEmail } from '../controllers/login.controllers.js'

const login = Router()

login.post('/', getByEmail)

export default login

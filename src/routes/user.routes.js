import { Router } from 'express'
import { patchPhone } from '../controllers/user.controllers.js'

const user = Router()

user.post('/:userId', patchPhone)

export default user

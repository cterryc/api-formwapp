import { Router } from 'express'
import { postForm } from '../controllers/forms.controllers.js'

const newForm = Router()

newForm.post('/', postForm)

export default newForm

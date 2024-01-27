import { Router } from 'express'
import { postForm, getFormByToken, getFormByUserId } from '../controllers/forms.controllers.js'

const newForm = Router()

newForm.post('/', postForm)
newForm.get('/token/:token', getFormByToken)
newForm.get('/user/:id', getFormByUserId)

export default newForm

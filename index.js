import SERVER from './src/config/app.js'
import DATA_BASE from './src/config/db.js'
import { contactEmail } from './src/helpers/nodeMailer.js'
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env
const HTTP_PORT = PORT || 3001

contactEmail.verify(error => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send Emails')
    SERVER.listen(HTTP_PORT, async () => {
      await DATA_BASE.sync({ force: false })
      console.log(`Server is listening on port ${HTTP_PORT}`)
    })
  }
})

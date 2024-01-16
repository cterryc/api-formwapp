import SERVER from './src/config/app.js'
import DATA_BASE from './src/config/db.js'
import { contactEmail } from './src/helpers/nodeMailer.js'

const { PORT_HTTP } = process.env
const PORT = PORT_HTTP || 3001

contactEmail.verify(error => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send Emails')
    SERVER.listen(PORT, async () => {
      await DATA_BASE.sync({ force: false })
      console.log(`Server is listening on port ${PORT}`)
    })
  }
})

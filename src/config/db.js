import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()
const {
  PORT_DB,
  USER_DB,
  PASS_DB,
  NAME_DB,
  LOCAL,
  USER_DB_LOCAL,
  PASS_DB_LOCAL,
  PORT_DB_LOCAL,
  NAME_DB_LOCAL
} = process.env

let DATA_BASE
if (LOCAL) {
  DATA_BASE = new Sequelize(`postgres://${USER_DB_LOCAL}:${PASS_DB_LOCAL}@${PORT_DB_LOCAL}/${NAME_DB_LOCAL}`, {
    logging: false
  })
} else {
  DATA_BASE = new Sequelize(`postgres://${USER_DB}:${PASS_DB}@${PORT_DB}/${NAME_DB}`, {
    logging: false
  })
}

export default DATA_BASE

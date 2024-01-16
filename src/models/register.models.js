import { DataTypes } from 'sequelize'
import DATA_BASE from '../config/db.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

const Users = DATA_BASE.define('user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set (value) {
        const hash = bcrypt.hashSync(value, 10)
        this.setDataValue('password', hash)
      }
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    stateaccount: {
      type: DataTypes.ENUM('1', '2', '3', '4'),
      allowNull: false,
      defaultValue: '1'
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://res.cloudinary.com/dniekrmqb/image/upload/v1699131181/fondo-avatar_yij70b.png'
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING,
      defaultValue: function () {
        return crypto.randomBytes(7).toString('hex')
      }
    },
    hashgoogle: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      set (value) {
        const hash = bcrypt.hashSync(value, 10)
        this.setDataValue('hashgoogle', hash)
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    inputData: {
      type: DataTypes.JSON,
      defaultValue: {}
    }
  },
  {
    timestamps: false
  }
)

export default Users

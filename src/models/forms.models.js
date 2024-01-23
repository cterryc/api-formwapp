import { DataTypes } from 'sequelize'
import DATA_BASE from '../config/db.js'
import crypto from 'crypto'
import Users from './register.models.js'

const Forms = DATA_BASE.define(
  'form',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inputs: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        'https://res.cloudinary.com/dniekrmqb/image/upload/a_hflip//v1705992445/b6nca18ik1m5x6ra9cb9.jpg'
    },
    token: {
      type: DataTypes.STRING,
      defaultValue: function () {
        return crypto.randomBytes(14).toString('hex')
      }
    },
    delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  },
  {
    timestamps: false
  }
)

Users.hasMany(Forms, {
  foreignKey: 'userId'
})

Forms.belongsTo(Users, {
  foreignKey: 'userId'
})

export default Forms

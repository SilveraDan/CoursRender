const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://postgreusersql_user:gL53A3K6ka7YC3ys6tCScJpyIKTBJrbh@dpg-clfhlr6f27hc739ckreg-a/postgreusersql', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize

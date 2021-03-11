import Sequelize from 'sequelize';

const connection = new Sequelize('demo', 'manh737', '123456', {
    host: 'localhost',
    port: '5431',
    dialect: 'postgres'
})

console.info('Connecting database...')

connection
    .authenticate()
    .then(() => {
        console.info('Database connected.')
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err)
    })

export default connection;
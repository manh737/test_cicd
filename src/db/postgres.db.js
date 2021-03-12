import Sequelize from 'sequelize';

function connect() {
    // const connection = new Sequelize('demo', 'manh737', '123456', {
    //     host: 'localhost',
    //     port: '5431',
    //     dialect: 'postgres'
    // })
    const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
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
        return connection;
}

export default {connect: connect};
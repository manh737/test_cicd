import Sequelize from 'sequelize';
import dbConnection from '../db/postgres.db.js';

const models = {};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]){
        models[modelName].associate(models);
    }
})

models.sequelize = dbConnection;
models.Sequelize = Sequelize;

export default models;

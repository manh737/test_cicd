import index from './index.js';
import DataTypes from 'sequelize';
const sequelize = index.sequelize;

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    // Other model options go here
});

export default User;
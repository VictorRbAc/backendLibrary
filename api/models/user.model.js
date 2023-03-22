const {DataTypes} = require('sequelize');
const sequelize = require('../db/index.js');

const User = sequelize.define('user',{
    name: {
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
})
module.exports = User;
// (async function (){
//     try {
//         await User.sync({alter:true})
//     } catch (err) {
//         console.log(err)
//     }
// })
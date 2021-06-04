const sequelize = require('sequelize');

const db = new sequelize({
    dialect : 'mysql',
    database : 'basic',
    username : 'participant',
    password : 'part',
});

const tasks = db.define('userdetails',{
    name:{
        type : sequelize.STRING,
        allowNull: false
    }  ,
    rollNumber:{
        type : sequelize.STRING,
        primaryKey:true,
        allowNull :false
    },
    tripname:{
        type :sequelize.STRING,
        defaultValue: "Trip-A",
    },
    gender :{
        type: sequelize.STRING
    },
    email:{
        type : sequelize.STRING
    },
})
module.exports = {
    db,tasks
}
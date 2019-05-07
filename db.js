const sequelize = require('sequelize');
123123
const db = new sequelize({
    database: "myDB",
    username: "postgres",
    password: "112233",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    define: {
        freezeTableName: true
    }
});

db.authenticate()
.then(() => console.log('Connected!'))
.catch(err => console.log(err.message))

// Create Table
const employeesManager = db.define('EmployeesManager', {
    salaryCode: {
        type: sequelize.STRING
    },
    // workdayCode: sequelize.STRING,
    // userCode: sequelize.STRING,
    name: sequelize.STRING,
    address: sequelize.STRING,
    email: sequelize.STRING
})

// class employeesManager extends Model {}
// employeesManager.init({
//     title: sequelize.STRING
// },
// {
//     sequelize, modelName: 'EmployeesManager'
// })

const salary = db.define('Salary', {
    salaryCode: {
        type: sequelize.STRING
    },
    sum: sequelize.INTEGER
})

// class salary extends Model {}
// salary.init({
//     username: sequelize.STRING
// },
// {
//     sequelize, modelName: 'Salary'
// })

// const workDay = db.define('WorkDay', {
//     workDayCode: sequelize.STRING,
//     shift: sequelize.STRING,
//     dayOfWeek: sequelize.STRING
// })

// const usersManager = db.define('UsersManager', {
//     userCode: sequelize.STRING,
//     username: sequelize.STRING,
//     password: sequelize.STRING,
//     level: sequelize.STRING
// })

employeesManager.hasOne(salary, 
    { as: "EmployeesManagerToSalary"})
salary.belongsTo(employeesManager, 
    { as: "SalaryToEmployeesManager"})

db.sync()
.then(() => console.log('Create Model Success!'))

// Create DB
// salary.create({
//     username: 'firstUser',
//     password: 'firstPass'
// })
// .then(() => console.log('Add DB Success!'))
// .catch(err => console.log(err.message))

// employeesManager.create({
//     salaryCode: "salary01",
//     name: "truongtbn",
//     address: "87CT",
//     email: "salary01@gmail.com"
// })
// .then(() => console.log("Add DB Success!"))
// .catch(err => console.log(err.message))

// salary.create({
//     salaryCode: "salary01",
//     sum: 0
// })
// .then(() => console.log('Add DB Success!'))
// .catch(err => console.log(err.message))

module.exports = employeesManager;

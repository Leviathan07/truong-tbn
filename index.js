const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const employeesManager = require('./db.js')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Welcome'))

app.post('/add', (req, res) => {
    const salaryCode = req.body.salaryCode
    employeesManager.create({
        salaryCode: salaryCode
    })
    .then(() => res.json({'result': 'success'}))
    .catch(err => res.json({'result': 'failure'}))
})

app.post('/read', (req, res) => {
    employeesManager.findAll()
    .then(salaryCode => 
        res.json({'result': 'success', 'salaryCode': salaryCode}))
    .catch(err => res.json({'result': 'failure'}))
})

app.post('/update', (req, res) => res.send('update'))

app.post('/delete', (req, res) => res.send('delete'))

app.listen(port, () => 
    console.log(`Server is running on localhost:${port}`)
)
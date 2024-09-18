import express from 'express'
import { config } from 'dotenv'
import routerLugares from './src/routes/lugares.js'
import { dbConnection } from './src/DB/dbConnection.js'
const app = express()
app.use(express.json())
config()
dbConnection()
app.use('/lugares', routerLugares)
app.listen(process.env.PORT, ()=>{
    console.log("servidor funcionando correctamente")
})
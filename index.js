import express from 'express'
import { config } from 'dotenv'
import { connetion } from './src/DB/Conexion.js'
import routerLugares from './src/routes/lugares.js'
const app = express()
app.use(express.json())
config()
connetion()
app.use('/lugares', routerLugares)
app.listen(process.env.PORT, ()=>{
    console.log("servidor funcionando correctamente")
})
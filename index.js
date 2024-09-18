import express from 'express'
import cors from "cors"
import { config } from 'dotenv'
import { dbConnection } from './src/DB/dbConnection.js'



const app = express()
app.use(express.json())
config()
dbConnection()



import routerLugares from './src/routes/lugares.js'
app.use('/lugares', routerLugares)

import authRouter from './src/routes/auth.routes.js';
app.use("/api", authRouter);



app.listen(process.env.PORT, ()=>{
    console.log("servidor funcionando correctamente")
})
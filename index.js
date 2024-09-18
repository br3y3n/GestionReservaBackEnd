import express from 'express'
import cors from "cors"
import { config } from 'dotenv'
import { dbConnection } from './src/DB/dbConnection.js'
import routerReserva from './src/routes/reserva.js'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'



const app = express()
app.use(express.json())
app.use(morgan("dev"))

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));
app.use(cookieParser())

config()
dbConnection()



import routerLugares from './src/routes/lugares.js'
app.use('/lugares', routerLugares)
app.use('/reserva', routerReserva)

import authRouter from './src/routes/auth.routes.js';
app.use("/api", authRouter);



app.listen(process.env.PORT, ()=>{
    console.log("servidor funcionando correctamente")
})
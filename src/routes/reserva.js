import { Router } from "express";
import { createReserva, getAllReservas, getReservaById, getReservaByIdUser } from "../controllers/reserva.js";


const routerReserva = Router()

routerReserva.get('/',getAllReservas )
routerReserva.get('/:id', getReservaById)
routerReserva.get('/usuario/:id', getReservaByIdUser)
routerReserva.post('/', createReserva )

export default routerReserva;
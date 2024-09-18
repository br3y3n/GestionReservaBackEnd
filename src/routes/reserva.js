import { Router } from "express";
import { createReserva, getAllReservas, getReservaById } from "../controllers/reserva.js";


const routerReserva = Router()

routerReserva.get('/',getAllReservas )
routerReserva.get('/:id', getReservaById)
routerReserva.post('/', createReserva )

export default routerReserva;
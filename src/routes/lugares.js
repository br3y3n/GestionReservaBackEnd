import { Router } from "express";
import { createLugar, getAllLugar, getLugarById } from "../controllers/lugares.js";


const routerLugares = Router()

routerLugares.get('/', getAllLugar)
routerLugares.get('/:id', getLugarById)
routerLugares.post('/', createLugar)

export default routerLugares;
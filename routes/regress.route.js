import express from 'express'
import { Lin, Pol, Mul } from '../controllers/Regress.controller.js'

export const regress_route = express.Router()
regress_route.post('/Lin', (req, res) => Lin(req, res))
regress_route.post('/Pol', (req, res) => Pol(req, res))
regress_route.post('/Mul', (req, res) => Mul(req, res))
export default regress_route

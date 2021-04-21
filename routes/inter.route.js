import express from 'express'
import { Ndd, Lag, Sp } from '../controllers/Inter.controller.js'
export const inter_route = express.Router()
inter_route.post('/Ndd', (req, res) => Ndd(req, res))
inter_route.post('/Lag', (req, res) => Lag(req, res))
inter_route.post('/Sp', (req, res) => Sp(req, res))
export default inter_route

import express from 'express'
import { Bi, Se, Fa, One, Newton } from '../controllers/Loot.controller.js'

export const root_route = express.Router()
root_route.post('/Se', (req, res) => Se(req, res))
root_route.post('/Bi', (req, res) => Bi(req, res))
root_route.post('/Fa', (req, res) => Fa(req, res))
root_route.post('/One', (req, res) => One(req, res))
root_route.post('/New', (req, res) => Newton(req, res))
export default root_route

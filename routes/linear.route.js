import express from 'express'
import {
    Con,
    Gae,
    Gaj,
    Lu,
    Gau,
    Ja,
    Cra,
} from '../controllers/Linear.controller.js'

export const linear_route = express.Router()
linear_route.post('/Con', (req, res) => Con(req, res))
linear_route.post('/Lu', (req, res) => Lu(req, res))
linear_route.post('/Gae', (req, res) => Gae(req, res))
linear_route.post('/Gau', (req, res) => Gau(req, res))
linear_route.post('/Gaj', (req, res) => Gaj(req, res))
linear_route.post('/Ja', (req, res) => Ja(req, res))
linear_route.post('/Cra', (req, res) => Cra(req, res))
export default linear_route

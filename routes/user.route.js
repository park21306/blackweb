import express from "express";
import {Login,Users} from '../controllers/user.controller.js'
const user_route = express.Router()


user_route.post('/login',(req,res) => Login(req,res))
user_route.post('/:id',(req,res) => Users(req,res))

export default user_route
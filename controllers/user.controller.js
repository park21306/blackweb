import fetch from "node-fetch";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
let fuckyou = []
export const Login = (req, res) =>{
    // const {username,password} = req.query
    // const {username,password} =req.params
    const {username,password} =req.body
    res.json({
        username,
        password
    })
   
}
export const Users = async (req, res) =>{
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // const json = await data.json()
    // const { id } = req.params
    // const val    = json.filter((user)=> user.id === parseInt(id ))
    // res.json({
    //     msg : 'users',
    //     data : val,
    // })
    res.json({ 
        data : fuckyou,
        
    })

}
export const R = async (req, res) =>{
    const { name } = req.body
    
    fuckyou.push({name})
    
    res.json({
        name,
        
    })
}
export const S =  (req, res) =>{
    const { namei } = req.params
    const v = fuckyou.filter((a)=>a.name==namei)
    res.json({
        data : v,
    })
}

export default {Login,Users,R,S}
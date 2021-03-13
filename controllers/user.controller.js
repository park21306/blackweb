import fetch from "node-fetch";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
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
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await data.json()
    const { id } = req.params
    const val    = json.filter((user)=> user.id === parseInt(id ))
    res.json({
        msg : 'users',
        data : val,
    })

}

export default {Login,Users}
import { responseHandler } from "../middleware/responseHandler.js";


export async function getInfo(req, res, next){
    const {name, email, password} = req.body;
    if (!name || !email || !password) return res.status(400).json("Credentials needed");
    
    try{
        res.json({name, email, password});
    }catch(err){
        next(err);
    }
}
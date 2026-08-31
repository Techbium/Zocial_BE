import { responseHandler } from "../middleware/responseHandler.js";
import db from "../config/firebaseConfig.js";
import { getUserModel } from "../model/user.model.js";


export async function postInfo(req, res, next){
    const {name, email, age} = req.body;
    // if (!name || !email || !password) return res.status(400).json("Credentials needed");
    
    try{
        console.log('Start...');
        const postDetails = await getUserModel(name, email, age);
        console.log('finish...');

        res.status(201).json({
            message: "User created",
            // id: userRef.id,
            });
    } catch(err){
        next(err);
    }
}

export async function getInfo(req, res, next){
    //Get username, email and passwoord from the DB
    res.json({
        message: `name, email, password`
    });
}
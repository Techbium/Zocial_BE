import type { Request, Response, NextFunction } from "express";
import pool from "../config/psql.config.js";
import { db } from "../config/db/index.js";
import { textTable } from "../config/db/schema.js";
// import { responseHandler } from "../middleware/responseHandler.js";

// import { getUserModel } from "../model/user.model.ts";


export async function postInfo(req:Request, res:Response, next:NextFunction){
    try{
        const { username, message } = req.body;

        const result = await db.insert(textTable).values({username, message}).returning();

        res.json(result);
    } catch(err){
         console.error("DATABASE ERROR:", err);
        next(err);
    }
}

export async function getInfo(req:Request, res:any, next:NextFunction){
    try {
        const result = await db.select().from(textTable);

        res.json({
            message: result
        });
    } catch(err){
         console.error("DATABASE ERROR:", err);
        next(err);
    }
    
}
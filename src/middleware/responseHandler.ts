import type { Request, Response, NextFunction } from "express";
export function responseHandler(res:Response, status:number, message:string, data=null ){
    res.status(status).json({
        status,
        message,
        data
    });
};


export function errorhandler(err:any, req:Request, res:Response, next:NextFunction){
    const statusCode = err.status || err.statusCode || 500;
    console.log(`[Error]...=> ${err.message}`);
    console.log(`{Error}.... ${err}`);
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: err.message || 'No Error messagge: Default internal server error'
    });
};

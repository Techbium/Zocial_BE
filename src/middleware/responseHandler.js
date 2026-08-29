export function responseHandler(res, status, message, data=null ){
    res.status(status).json({
        status,
        message,
        data
    });
};


export function errorhandler(err, req, res, next){
    const statusCode = err.status || err.statusCode || 500;
    console.log(`[Error]..=> ${err.message}`);
    console.log(`{Error}.... ${err}`);
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: err.message || 'No Error messagge: Default internal server error'
    });
};

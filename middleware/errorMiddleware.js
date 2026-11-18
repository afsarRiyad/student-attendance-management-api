const errorMiddleware = (err, req, res, next) => {

    if (res.headersSent) {
        return next(err);
    }

    let message = err.message;
    let statusCode = err.statusCode || 500;

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = err.message;
    }

    if (!err.isOperational && statusCode === 500) {
        console.error("BUG:", err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error!"
        });
    }

    return res.status(statusCode).json({
        success: false,
        message
    });
};

export default errorMiddleware;
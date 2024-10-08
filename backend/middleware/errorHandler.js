const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? statusCode : 500;

    res.json({message : err.message, stacktrace: err.stack});
};

module.exports = errorHandler;
const { constants } = require("../constants");

function errorTitle(statusCode) {
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            return 'Validation Failed';

        case constants.NOT_FOUND:
            return 'Not Found';

        case constants.UNAUTHORIZED:
            return 'Unauthorized';

        case constants.FORBIDDEN:
            return 'Forbidden';

        case constants.SERVER_ERROR:
            return 'Server Error';

        default:
            return 'Unknown Error';
    }
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    res.json({
        title: errorTitle(statusCode),
        message: err.message,
        stackTrace: err.stack,
    });
};

module.exports = errorHandler;
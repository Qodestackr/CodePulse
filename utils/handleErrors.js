const { logError } = require("../config/logger")

function handleErrors(error, loggerFunc) {
    switch (error.constructor) {
        case TypeError:
            loggerFunc
            break;
        case SyntaxError:
            loggerFunc
            break;
        case ReferenceError:
            loggerFunc
            break;
        case RangeError:
            loggerFunc
            break;
        case 'NetworkError':
            loggerFunc
            break;
        case 'SystemError':
            loggerFunc

            break;

        default:
            break;
    }
}

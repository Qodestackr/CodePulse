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

// // 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 :: Garbage code!
var cors = require("cors");

const corsOptions = () => {
    if (process.env.NODE_ENV === "production") {
        return {
            origin: frontend,
            optionsSuccessStatus: 200,
            methods: "GET,POST",
        };
    } else {
        return {
            optionsSuccessStatus: 200,
        };
    }
};

module.exports = {
    setCors: function (app) {
        app.use(cors(corsOptions()));
    },
};

const mongoose = require("mongoose");
const { logInfo } = require("../config/logger")


const connectDB = async () => {
    try {
        const password = "winchydb@cloud";
        const encodedPassword = encodeURIComponent(password);
        const uri = `mongodb+srv://winchydb:${encodedPassword}@cluster0.kqsvcty.mongodb.net/CodePulseDB?retryWrites=true&w=majority`;

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectDB;

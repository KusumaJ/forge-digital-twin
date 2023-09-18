const mongoose = require('mongoose');

class Database {
    async connect() {
        try {
            let MONGODB_URL="mongodb://localhost:27017";
            // await mongoose.connect(process.env.MONGODB_URL);
            await mongoose.connect(MONGODB_URL);
            console.log('Database connection successfull.');
        } catch(err) {
            console.log('Database connection error:', err);
        }
    }
}

module.exports = new Database();
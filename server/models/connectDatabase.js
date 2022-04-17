const mongoose = require("mongoose");

mongoose
.connect(process.env.DATABASE_URL)
.then(() => console.log(`connection successfully with Database`))
.catch((error) => console.log(`connection failed ${error.message}`));

module.exports = mongoose;
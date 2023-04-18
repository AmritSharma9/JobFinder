const mongoose = require("mongoose") //importing moongoose

mongoose.connect("mongodb+srv://amritsharma0215:PndH3jMvemxXBinG@cluster0.girgv0h.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Database connected"))
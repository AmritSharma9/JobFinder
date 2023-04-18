const express = require("express")
const app = express()

require("./DatabaseConnect/dbConnect")




app.listen(5555, () => {
    console.log("Server Started")
})
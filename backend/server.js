import express from "express"
import dotenv from "dotenv"

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js"
import contactRoutes from "./routes/contact.routes.js"

dotenv.config();

const app = express()
const port = process.env.PORT || 3000


app.use(express.json()); 

app.use('/api/auth',authRoutes)
app.use('/api/contact',contactRoutes)

app.listen(port, () => {
    connectToMongoDB();
    console.log(`Example app listening on port ${port}`)
})
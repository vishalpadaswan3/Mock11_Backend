const express = require('express');
const { connection } = require('./config/db');
const { postRouter } = require('./Routes/travel.Routes');
require('dotenv').config();


const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Mock 11 deployed backend");
})

app.use(postRouter);



app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.PORT}`)
})

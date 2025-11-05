const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', // Adjust this to your frontend's origin
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
require('dotenv').config();

//Database

const db = require('./models')

//Routers
const pageRouter = require('./routes/pages');
app.use("/", pageRouter);

db.sequelize
.sync()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log('Server is running on port 4000');
    })
})
.catch((err) => {
    console.log(err);
});
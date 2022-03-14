import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRoutes from '../routers/product';
import newRoutes from '../routers/new'

const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json());

//route
app.use("/api",productRoutes)
app.use("/api",newRoutes)

//conn db
mongoose.connect('mongodb://localhost:27017/we16309')
.then(() => console.log('Kết nối db thành công'))
.catch((error) => console.log(error))

//connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})
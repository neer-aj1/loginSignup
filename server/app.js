import express  from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoutes.js'

//env file config
dotenv.config();
const port = process.env.PORT || 3000;

//database connection 
connectDatabase();

//express instance
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/user', userRoutes);
app.use(cookieParser());

app.get('/', (req, res) => res.send('Server is ready'))
app.listen(port, () => console.log(`Server started at port: ${port}`));
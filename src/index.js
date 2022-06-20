import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './services/mongoDB/connectDB'
import userRoutes from './routes/user'
import cors from 'cors'
dotenv.config('./env'); // dotenv.config() load .env in process.env

const app = express();
const PORT = process.env.PORT || 8080
connectDB();

app.use(express.json());
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(cors()); 
// cors() is did preflight check for security 
app.use('/user', userRoutes);


app.get('/', (req, res)=> {
  res.send(`Server deployed on PORT ${PORT}`)
})

app.listen(PORT, ()=>{
  console.log(`Server listening on PORT ${PORT}`)
})
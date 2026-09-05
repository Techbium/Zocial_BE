import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './route/route.js'
import {errorhandler} from "./middleware/responseHandler.js"

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(errorhandler);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Zocial-impact running on port...=> ${PORT}`)
})

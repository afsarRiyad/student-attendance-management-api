import 'dotenv/config.js';
import express from 'express'
import connectDb from './config/db.js';
import batchRoutes from './modules/routes/batch.routes.js'
import studentRoutes from './modules/routes/student.routes.js'
import attendanceRoutes from './modules/routes/attendance.routes.js'
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express()
app.use(express.json())

app.use('/api', batchRoutes)
app.use('/api', studentRoutes)
app.use('/api', attendanceRoutes)

const port = process.env.PORT || 5000
const server = async(req, res) => {

        try {
        app.listen(port, ()=>{
            console.log(`server running on port ${port}`);
        })
     connectDb()
    } catch (error) {
        console.log('error while connecting server', error.message);
    }
}

app.use(errorMiddleware)

server()
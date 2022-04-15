import express from "express";
import db from "./config/database.js";
import vacancieRoutes from "./routes/vacancie.js";
import candidateRoutes from "./routes/candidate.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/vacancies', vacancieRoutes);
app.use('/candidates', candidateRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));

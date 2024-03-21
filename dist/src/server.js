import express from 'express';
import weatherRoute from './routes/weatherRouters.js';
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRoute);
app.listen(PORT, () => {
    console.log(`Server is Listening on Port: ${PORT}`);
});
//# sourceMappingURL=server.js.map
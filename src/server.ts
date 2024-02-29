import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is Listening on Port: ${PORT');
});

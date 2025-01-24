import express from "express";
import router from "./routes/taskRoutes";
var cors = require('cors')

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(cors())
app.use('/tasks', router);

app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

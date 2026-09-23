
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())

const movieRouter = require("./routes/movieRoutes");
app.use("/api", movieRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});
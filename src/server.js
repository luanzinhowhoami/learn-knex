const express = require("express");
const routes = require("./routes");

// Variables
const PORT = 3333;
const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

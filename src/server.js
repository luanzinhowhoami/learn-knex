const express = require("express");
const routes = require("./routes");

// Variables
const PORT = 3333;
const app = express();

// Middlewares
app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

// Not Found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

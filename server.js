require("express-async-errors");
const express = require("express")
const routes = require("./src/routes")
const AppError = require("./src/utils/AppError");

const app = express()
app.use(express.json())
app.use(routes)
const PORT = 3333

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
});


app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})
const {Router} = require("express")
const BookController = require("../controllers/BookController")

const bookRoutes = Router()

const bookController = new BookController

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBooks)
bookRoutes.get("/books/:id", bookController.listBookById)
bookRoutes.put("/books/:id", bookController.updateBook)
bookRoutes.delete("/books/:id", bookController.deleteBook)
 
module.exports = bookRoutes
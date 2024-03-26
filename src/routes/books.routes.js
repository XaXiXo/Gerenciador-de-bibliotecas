const {Router} = require("express")
const BookController = require("../controllers/BookController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const bookRoutes = Router()

const bookController = new BookController

bookRoutes.get("/", bookController.listBooks)
bookRoutes.get("/:id", bookController.listBookById)

bookRoutes.use(ensureAuthenticated)
bookRoutes.post("/", bookController.createBook)
bookRoutes.put("/:id", bookController.updateBook)
bookRoutes.delete("/:id", bookController.deleteBook)
 
module.exports = bookRoutes
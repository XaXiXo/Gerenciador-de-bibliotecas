const {Router} = require("express")
const LoansController = require("../controllers/EmprestimoController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const loansRoutes = Router()
const loansController = new LoansController()

loansRoutes.use(ensureAuthenticated)

loansRoutes.post("/:user_id/:book_id", loansController.borrowBooks)
loansRoutes.get("/:user_id", loansController.listBorrowedBooks)
loansRoutes.get("/total/:user_id", loansController.totalBorrowedBooks)
loansRoutes.patch("/devolucao/:user_id/:book_id", loansController.returnBorrowedBooks)

module.exports = loansRoutes
const {Router} = require("express")
const LoansController = require("../controllers/EmprestimoController")

const loansRoutes = Router()
const loansController = new LoansController()

loansRoutes.post("/loan/:user_id/:book_id", loansController.borrowBooks)

loansRoutes.get("/loan/:user_id", loansController.listBorrowedBooks)
loansRoutes.get("/loan/total/:user_id", loansController.totalBorrowedBooks)
loansRoutes.patch("/loan/devolucao/:user_id/:book_id", loansController.returnBorrowedBooks)

module.exports = loansRoutes
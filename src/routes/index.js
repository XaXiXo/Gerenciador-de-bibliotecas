const {Router} = require("express")
const userRoutes = require("./user.routes")
const bookRoutes = require("./books.routes")
const loanRoutes = require("./loans.routes")

const routes = Router()

routes.use("/", userRoutes)
routes.use("/", bookRoutes)
routes.use("/", loanRoutes)

module.exports = routes
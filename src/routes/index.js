const {Router} = require("express")
const userRoutes = require("./user.routes")
const bookRoutes = require("./books.routes")
const loanRoutes = require("./loans.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/books", bookRoutes)
routes.use("/loan", loanRoutes)
routes.use("/session", sessionsRoutes)

module.exports = routes
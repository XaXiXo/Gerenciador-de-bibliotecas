const {Router} = require("express")
const UserController = require("../controllers/UserController")
const checkUserExists = require("../middlewares/checkUserExist")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()

const userController = new UserController()

userRoutes.post("/", userController.createUser)

userRoutes.use(ensureAuthenticated)

userRoutes.get("/", userController.listUsers)

userRoutes.get("/:user_id", checkUserExists, userController.listUserById)

userRoutes.put("/:user_id", checkUserExists, userController.updateUser)
userRoutes.delete("/:user_id", checkUserExists, userController.deleteUser)


module.exports = userRoutes
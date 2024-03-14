const knex = require("../database/knex")

class UserController {
    async createUser(req, res) {
        const {nome, email, telefone} = req.body

        const user = {
            nome,
            email,
            telefone
        }
        await knex("users").insert({nome, email, telefone})
    

        res.status(201).json(user)
        
    }
    async listUsers( req, res) {
        const users = await knex("users")
        res.status(200).json(users)
    }

    async listUserById(req, res) {
        const {user_id} = req.params
        const user = await knex("users").where({id: user_id})

        return res.status(200).json(user)
    }

    async updateUser(req, res) {
        const {user_id} = req.params
        const {nome, email, telefone} = req.body

        await knex("users").where({id: user_id}).update({nome, email,telefone})
        return res.status(200).json("Usuário atualizado com sucesso!")
    }

    async deleteUser(req, res) {
        const {user_id} = req.params
        await knex("users").where({id: user_id}).delete()
        return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = UserController
const knex = require("../database/knex")
class BookController {
    async createBook(req, res) {
    const { titulo, autor,categoria} = req.body

    await knex("livros").insert({titulo, categoria, autor})

    res.status(201).json("Livro cadastrado com sucesso")
}
async listBooks(req, res) {
    const book = await knex("livros")
    res.status(200).json(book)
}

async listBookById(req, res) {
    const {book_id} = req.params
    const book = await knex("livros").where({id: book_id})
    res.status(200).json(book)
}

async updateBook(req, res) {
    const {titulo, autor} = req.body
    const {id} = req.params

    await knex("livros").where({id}).update({titulo, autor})
    return res.status(200).json("Livro atualizado com sucesso!")
}

async deleteBook(req, res) {
    const {id} = req.params

    await knex("livros").where({id}).delete()
    return res.status(200).json("Registro do livro deletado com sucesso!")
}

}

module.exports = BookController
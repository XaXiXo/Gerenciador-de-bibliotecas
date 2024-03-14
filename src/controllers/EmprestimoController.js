const knex = require("../database/knex")

class LoansController {

    async borrowBooks(req, res) {
        const{user_id, book_id} = req.params

        const book = await knex("livros").where({id: book_id}).first()
        const user = await knex("users").where({id: user_id}).first()

        if(!book) {
            return res.status(400).json("livro não encontrado!")
        }

        if(!user) {
            return res.status(400).json("Usuário não encontrado!")
        }

        await knex("loans").insert({user_id, book_id})
        await knex("livros").where({id: book_id}).update({disponibilidade: false})

        return res.status(200).json("Empréstimo realizado com sucesso!")
    }

    async listBorrowedBooks(req, res) {
        const {user_id} = req.params

        const loans = await knex("loans")
        .where({user_id})
        .innerJoin('livros', 'livros.id', 'loans.book_id')
        .select('livros.titulo', 'livros.autor', 'livros.categoria')

        return res.status(200).json(loans)
    }

    async totalBorrowedBooks(req, res) {
        const {user_id} = req.params

        const [total] = await knex('loans').where({user_id}).count({livros:'book_id' })
        
        return res.status(200).json(total)
    }

    async returnBorrowedBooks(req, res) {
        const{user_id, book_id} = req.params

        const book = await knex("livros").where({id: book_id}).first()
        const user = await knex("users").where({id: user_id}).first()

        if(!book) {
            return res.status(400).json("livro não encontrado!")
        }

        if(!user) {
            return res.status(400).json("Usuário não encontrado!")
        }

        const loan = await knex("loans").where({user_id})

        const result = loan.find(book => book.id == book_id)

        const bookId = result.book_id

        if(bookId == book_id) {
            await knex("livros").where({id: book_id}).update({disponibilidade: true})
            return res.status(201).json("Livro devolvido")
        }

        return res.status(400).json("Operação mal sucedida")

    }
}

module.exports = LoansController
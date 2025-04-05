
var books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",  
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
    }
];

const getAllBooks = (req, res) => {
    res.json(books);
}


const FindBookbyId = (req, res) => {
   const {id} = req.params;
   let book = books.find((book) => book.id === parseInt(id));
   res.json(book);
}

module.exports = {
    getAllBooks,
    FindBookbyId
};
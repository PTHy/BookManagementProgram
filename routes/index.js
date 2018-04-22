
module.exports = (app, Book) => {

  //Get All books
  app.get('/api/books', (req, res) => {
    Book.find((err, books) => {
      if(err) return res.status(500).send({error : 'database failure'});3
      if(books.length === 0) return res.status(404).send({error : 'books are not exists'})
      res.json(books);
    });
  });

  //Get Book by Author
  app.get('/api/books/author/:author', (req, res) => {

  })

  //Get Single Book
  app.get('/api/books/:book_id', (req, res) => {

  })

  //Create Book
  app.post('/api/books', function(req, res){
    var book = new Book();
    book.title = req.body.name;
    book.author = req.body.author;
    book.published_date = new Date(req.body.published_date);

    book.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});

  //Update The Book
  app.put('/api/books/:book_id', (req, res) => {

  })

  //Delete Book
  app.delete('/api/books/:book_id', (req, res) => {

  })

}


module.exports = (app, Book) => {

  //Get All books
  app.get('/api/books', (req, res) => {
    Book.find((err, books) => {
      if(err) return res.status(500).send({error : 'database failure'})
      res.json(books);
    })
  })

  //Get Book by Author
  app.get('api/books/author/:author', (req,res) => {

  })

  //Get Single Book
  app.get('api/books/:book_id', (req,res) => {

  })

  //Create Book
  app.post('api/books', (req,res) => {
    var book = new Book();
    book.title = req.body.title;
    book.author = req.body.author;
    book.published_date = new Date(req.body.published_date);

    book.save((err) => {
      if(err){
        console.log(err);
        res.json({result : 0});
        return;
      }

      res.json({result : 1});
    })

  //Update The Book
  api.put('api/books/:book_id', (req,res) => {

  })

  //Delete Book
  api.delete('api/books/:book_id', (req,res) => {

  })

}

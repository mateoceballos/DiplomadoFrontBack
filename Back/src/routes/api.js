const Router = require("express");
const booksControler = require("../controllers/booksControler");

const router = Router();

router.post("/books", booksControler.createBooks);
router.get("/books", booksControler.getBooks);
router.put("/books/:id", booksControler.updateBook);
router.delete("/books/:id", booksControler.deleteBookById);

module.exports = router;

const Router = require("express");
const booksControler = require("../controllers/booksControler");
const usersController = require("../controllers/usersController");

const router = Router();

router.post("/books", booksControler.createBooks);
router.get("/books", booksControler.getBooks);
router.put("/books/:id", booksControler.updateBook);
router.delete("/books/:id", booksControler.deleteBookById);
router.post("/user", usersController.createUser);
router.get("/user", usersController.getUsers);
router.put("/user/:id", usersController.updateUser);
router.delete("/user/:id", usersController.deleteUserById);

module.exports = router;

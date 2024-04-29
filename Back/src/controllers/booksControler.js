const Books = require("../models/Books");

exports.createBooks = async (req, res) => {
  try {
    let dataBooks = new Books(req.body);
    await dataBooks.save();
    res.send(dataBooks);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};
exports.getBooks = async (req, res) => {
  try {
    const { filter } = req.body;
    let dataBooks;
    if (filter) {
      dataBooks = await Books.find(filter);
    } else {
      dataBooks = await Books.find();
    }
    res.json(dataBooks);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

exports.updateBook = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedBook = await Books.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).send("Libro no encontrado");
    }
    res.json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Books.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send("Libro no encontrado");
    }
    res.json({ message: "Libro eliminado correctamente", deletedBook });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

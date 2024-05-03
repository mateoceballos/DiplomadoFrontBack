const Users = require("../models/Users");

exports.createUser = async (req, res) => {
  try {
    let dataUsers = new Users(req.body);
    await dataUsers.save();
    res.send(dataUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};
exports.getUsers = async (req, res) => {
  try {
    const { filter } = req.query;
    let dataUsers;
    if (filter) {
      dataUsers = await Users.find(filter);
    } else {
      dataUsers = await Users.find();
    }
    res.json(dataUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

exports.updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedUser = await Users.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send("Libro no encontrado");
    }
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("Libro no encontrado");
    }
    res.json({ message: "Libro eliminado correctamente", deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar tu solicitud");
  }
};

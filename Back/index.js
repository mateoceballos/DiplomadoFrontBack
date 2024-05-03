const express = require("express");
const conexionDB = require("./src/config/db");
const cors = require("cors");
const app = express();

conexionDB();
app.use(cors());
app.use(express.json());
app.use("/", require("./src/routes/api"));
// app.get("/", (req, res) => {
//   res.send("hello world desde mi endpoint");
// });

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

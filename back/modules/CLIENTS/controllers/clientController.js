const checkClient = require("../../../common/functions/checkClient");
const Client = require("../models/clientModel");

const save = async (req, res) => {
  try {
    const clientData = req.body;

    checkClient(new Client(clientData));

    res.json({
      message: "Cliente guardado correctamente",
      data: clientData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al guardar el cliente", error: error.message });
  }
};

module.exports = {
  save,
};

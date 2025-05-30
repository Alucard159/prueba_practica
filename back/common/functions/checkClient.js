const Client = require("../../modules/CLIENTS/models/clientModel");
const isEmptyString = require("./isEmptyString");
const isValidEmail = require("./isValidEmail");

const checkClient = (client = new Client()) => {
  if (!(client instanceof Client)) {
    throw new Error("El cliente no es una instancia de la clase Client");
  }

  if (isEmptyString(client.name)) {
    throw new Error("El nombre del cliente no puede estar vacío");
  }

  if (isEmptyString(client.email)) {
    throw new Error("El email del cliente no puede estar vacío");
  }

  if (!isValidEmail(client.email)) {
    throw new Error("El email del cliente no es válido");
  }

  if (isNaN(client.age) || client.age < 18) {
    throw new Error(
      "La edad del cliente debe ser un número y mayor o igual a 18"
    );
  }

  return true;
};

module.exports = checkClient;

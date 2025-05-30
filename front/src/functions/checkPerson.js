const checkIsValidPerson = function (person = { nombre, email, edad }) {
  if (person.nombre == null || person.nombre.trim() === "") {
    return {
      valid: false,
      message: "El nombre es requerido",
    };
  }

  if (
    person.email == null ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email)
  ) {
    return {
      valid: false,
      message: "El email es inválido",
    };
  }

  if (person.edad == null || isNaN(person.edad) || person.edad < 18) {
    return {
      valid: false,
      message: "La edad debe ser un número mayor o igual a 18",
    };
  }

  return {
    valid: true,
    message: "Datos válidos",
  };
};

export default checkIsValidPerson;

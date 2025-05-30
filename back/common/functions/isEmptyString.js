const isEmptyString = (value) => {
  if (value === null || value === undefined) return true;
  
  if (typeof value !== "string") {
    return false;
  }
  return value.trim() === "";
};

module.exports = isEmptyString;

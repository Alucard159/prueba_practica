function auth(req, res, next) {
  let key;

  try {
    if (req.method === "GET") key = decodeURIComponent(req.query.key) || null;

    if (
      (req.method === "POST" || req.method === "PUT") &&
      req.headers["content-type"] === "application/json"
    )
      key = req.headers["x-api-key"] || null;

    if (
      req.method === "POST" &&
      req.headers["content-type"].indexOf("multipart/form-data") !== -1
    )
      key = req.body["key"] || null;

    if (!key) {
      return res.status(401).json({ message: "No autorizado" });
    }

    if (key !== process.env.API_KEY) {
      return res.status(401).json({ message: "No autorizado" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Error: ${err.message}` });
  }
}

module.exports = auth;

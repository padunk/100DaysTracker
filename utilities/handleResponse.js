function handleError(res, err) {
  console.error(err.message);
  res.status(500).send(err.message);
}

function handleSuccess(res, responseCode, text, id = "", data = null) {
  console.log(text + id);
  if (("" + responseCode)[0] === "3") {
    res.redirect(responseCode, "/");
    return;
  }
  res.status(responseCode).json(data);
}

module.exports = {
  handleError,
  handleSuccess
};

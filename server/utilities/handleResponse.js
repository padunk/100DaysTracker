function handleError(res, err) {
    console.error(err.message);
    res.status(500).send(err.message);
}

function handleSuccess(res, responseCode, text, id = "", data = null) {
    console.log(text + id);
    res.status(responseCode).json(data);
}

module.exports = {
    handleError,
    handleSuccess,
};

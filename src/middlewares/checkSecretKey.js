function checkSecretKey(req, res, next) {
    const { key } = req.headers

    if (!key || key !== process.env.SECRET_KEY) {
        return res.status(405).end()
    }

    next()
}

module.exports = { checkSecretKey }

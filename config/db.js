module.exports = {
    url: "mongodb://"+process.env.DATABASE_USERNAME+":"+process.env.DATABASE_PASSWORD+"@ds151382.mlab.com:51382/kitso-books",
    local_url: "mongodb://localhost:27017/kitsobooks-dev"
}

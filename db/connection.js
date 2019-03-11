const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose
  .connect('mongodb://localhost/planit-api', {useNewUrlParser: true})
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))


module.exports = mongoose
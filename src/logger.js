function Logger (message) {
  if (process.env.NODE_ENV === 'development') console.log(message)
}

module.exports = Logger

var mongoose = require('mongoose');

module.exports = mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0-glh5g.mongodb.net/demoAPI?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log('DB connected');
    },
    err => {
      console.log('DB error', err);
    }
  );

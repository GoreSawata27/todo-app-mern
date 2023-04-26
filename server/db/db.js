const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbb = mongoose
  .connect(
    "mongodb+srv://apis:apis@clust er0.rmvxyir.mongodb.net/ToDoApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = dbb;

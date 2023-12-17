const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbb = mongoose
  .connect(
    "",
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

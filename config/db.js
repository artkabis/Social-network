const mongoose = require("mongoose");

mongoose
  //.set('useCreateIndex', true)
  .connect(
    "mongodb+srv://"+ process.env.DB_USER_PASS +"@art-k-cluster.fbc9k.mongodb.net/artkabis_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
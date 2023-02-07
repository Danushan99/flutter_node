const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const errors = require("./middleware/errors");

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_DB_CONFIG, {
    useNewUrlPrser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (error) => {
      console.log("not connected " + error);
    }
  );
  
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", require("./routes/app.routs"));
app.use(error.errorHandler);

app.listen(process.env.port || 4001, function () {
  console.log("redy to go da fucker");
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/todoRoute");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const express = require("express");
const App = express();
App.use(express.json());
const userroute = require("./routes/userroute");
const mongoose = require("mongoose");

App.get("/", (request, response) => {
  response.send("Server Started and hitted / request");
});

App.use("/users", userroute);

mongoose
  .connect(
    "mongodb+srv://backendClass:backendClass123456@cls1.gbjhq.mongodb.net/"
  )
  .then((res) => {
    App.listen(5000, () => {
      console.log(
        `DB is Connected and Server is Listening on http://localhost:5000`
      );
    });
  })
  .catch((err) => {
    console.log(err, "DB Connection Error");
  });

// mongodb+srv://backendClass:backendClass123456@cls1.gbjhq.mongodb.net/

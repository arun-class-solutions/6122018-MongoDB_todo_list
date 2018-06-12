const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {
  db.collection("users").insert({
    firstName: "Arun",
    lastName: "Sood"
  }, (err, newUser) => {
    console.log(newUser);
    db.close();
  });
});

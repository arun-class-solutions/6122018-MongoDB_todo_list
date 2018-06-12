const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {
  db.collection("todos").find({}).toArray((err, todos) => {
    console.log(todos);
    db.close();
  });
});

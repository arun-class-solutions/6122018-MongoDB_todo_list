const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

// Cast user ID string to ObjectId in Mongo
const userId = new ObjectId("user id here");

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {
  db.collection("todos").insert({
    userId: userId,
    todoText: "Clean the house"
  }, (err, newTodo) => {
    console.log(newTodo);
    db.close();
  });
});

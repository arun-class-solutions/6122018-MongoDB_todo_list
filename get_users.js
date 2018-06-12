const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/todo_db";

MongoClient.connect(url, (err, db) => {
  db
  .collection("users")
  .aggregate([
    {
      $lookup: {
        from: "todos",
        localField: "_id",
        foreignField: "userId",
        as: "todos"
      }
    }
  ])
  .toArray((err, usersWithTodos) => {
    console.log(usersWithTodos);
    db.close();
  });
});

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";

// コレクションの作成
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.createCollection("test", (error, collections) => {
    client.close();
  });
});

// コレクション一覧
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.listCollections().toArray((error, items) => {
    for (let item of items) {
      console.log(item.name);
    }
    client.close();
  });
});

// コレクション名の変更
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.renameCollection("test", "test_old", (error, collection) => {
    client.close();
  });
});

// コレクションの削除
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.dropCollection("test_old", (error) => {
    client.close();
  });
});

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";

// ドキュメント作成
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.collection("products", (error, collection) => {
    collection.insertMany(
      [
        { name: "pen", price: 120 },
        { name: "note", price: 100 },
      ],
      (error, result) => {
        client.close();
      }
    );
  });
});

// ドキュメント検索
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.collection("products", (error, collection) => {
    collection.find({ name: { $regex: /e/g } }).forEach(
      // $eq : =
      // $gt : >
      // $gte : >=
      // $lt : <
      // $lte : <=
      // $ne : !=
      // $regex : 正規表現
      (item) => {
        console.log(item.name);
      },
      (error) => {
        client.close();
      }
    );
  });
});

// ドキュメント更新
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.collection("products", (error, collection) => {
    collection.updateMany(
      { name: /e/g },
      { $inc: { price: 20 } },
      (error, result) => {
        client.close();
      }
    );
  });
});

// ドキュメント削除
MongoClient.connect(url, (error, client) => {
  const db = client.db("sample");
  db.collection("products", (error, collection) => {
    collection.deleteMany({ name: /e/g }, (error, result) => {
      client.close();
    });
  });
});

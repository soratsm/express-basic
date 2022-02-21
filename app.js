// coreモジュール
import { fileURLToPath } from "url";
import { dirname } from "path";
// インストールモジュール
import express from "express";
import bodyParser from "body-parser";
// 実装
import logger from "./api/logger.js";
import router from "./routes/index.js";
// import / export を使用するためにはpackage.jsonに『"type": "module",』を追記


// ここまでは固定
const app = express();

// ejs:jsp形式のHTML拡張による記述（この辺をreactに任せる予定）
app.set("view engine", "ejs");

// 静的ファイルの配信
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/public", express.static(__dirname + "/public"));

// bodyParser:Postデータの解析を便利にするミドルウェア
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// 切り出したモジュールの使用
app.use(logger);
app.use("/", router);

// 変更を逐次監視し、自動再起動のため『nodemon』を入れる
app.listen(8000);

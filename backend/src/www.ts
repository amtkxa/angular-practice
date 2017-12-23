import * as express from "express";
import {NextFunction, Request, Response} from "express";


// Expressのインスタンス取得
const app = express();

import * as bodyParser from "body-parser";
import * as jwt from "jsonwebtoken";
import {Key} from "./key";

// JSON変換
app.use(bodyParser.json());

//トークン認証
app.post("/auth",(req: Request, res: Response, next: NextFunction) => {
	const token= req.body.token;
	try {
		jwt.verify(
			token,
			Key.PUBLIC,
			{algorithms: ["RS256"]});
	} catch (e) {
		next({message:"@@@@ トークン不正"+e.message});
		return;
	}
	res
	    .set("Content-Type","application/json; charset=utf-8")
	    .json({message:"@@@@ トークン正常"});
	});

// ----------------------------------------
//  リクエストの処理
// app.メソッド名(”パス名”,処理関数(リクエスト,レスポンス,次の処理))
// ----------------------------------------
//GETメソッド処理
app.get("/hello",(req: Request, res: Response, next: NextFunction) => {
	//レスポンス
	res
	    .set("Content-Type","application/json; charset=utf-8")
	    .json({message:req.url+" のリクエストを受けました"})
});

// 未定義パスへのリクエスト
app.use((req: Request, res: Response, next: NextFunction) => {
    //エラーメッセージを次の処理に渡す
    next({message: "該当するパスがありません"});
});

// エラー処理（エラー内容をJSONで返す）
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	//レスポンス
    res
        .set("Content-Type","application/json; charset=utf-8")
        .json(err);
    }
);

// -------------------------------------------------
// Webサーバーの起動
// -------------------------------------------------
const port = 3000;
app.listen(
    port, () => {
        console.info(port + "番ポートで待機中");
    })
    .on(
        //起動時エラー
        "error", (error) => {
            console.error("ポートが開けません" + error.message);
            process.exit(1);
        });

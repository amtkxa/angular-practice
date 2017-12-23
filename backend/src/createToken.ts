import {Key} from "./key";
import * as jwt from "jsonwebtoken";

//認証サンプルデータ
const userData={
    id: 1234, name: "灰原　哀", roll: "user", dept: "総務部"
};

// トークン生成
export const tokenStr = jwt.sign(
    userData,
    Key.PRIVATE,//秘密鍵
    {
        algorithm: "RS256",//署名アルゴリズム
        expiresIn: 7200  //有効期間(秒)
    });
console.log("\n\n");
//トークン出力
console.log(tokenStr);
console.log("\n\n");
//トークン内容確認
console.log(jwt.decode(tokenStr));

import * as fetch from "isomorphic-fetch";

const url = "http://localhost:3000/auth";

const token=`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwibmFtZSI6IueBsOWOn-OAgOWTgCIsInJvbGwiOiJ1c2VyIiwiZGVwdCI6Iue3j-WLmemDqCIsImlhdCI6MTUxNDAzMzI2OCwiZXhwIjoxNTE0MDQwNDY4fQ.JkTu_JwALMDi3UgTJAZgttmukiKAaAmQz9c2lNFh9zriexw9Ahq_WFjpWNEmVfY_pfK0jb-po78ii3foLZ5zFTwh6IQPFoeKPvz9CH7rTR-V2GM2sQ_0_KUrME66sv80p6hCE5tDMLOYA9sB4fj6XUUtevetyVFzMh-meUEUNf2VNvw_cRxNtpUMo-dFRsAh7tnwi59xYiDrC3MpjgzgdzRSwOxzbqRDjTgGrRWPBrD3affuriY7xmjeV2IDfSaoOfJRDTKNEq50e6y5KbuJSP2vLfZIbmz_dKJj_oQm5IGx8vgLwTalXYpSwwD7BVAZMhnxCfiEhH3x2dF4RuYB-A`;

let param:any ={};
//HTTPヘッダの設定
param.headers= {
	"Accept": "application/json",
    "Content-Type": "application/json",
    "cache": "no-cache",
};
//トークンをHTTPボディ部分にJSON形式で送る設定
param.body = JSON.stringify({token:token});
param.method="POST";

//fetch APIでリクエスト送信
fetch(url, param)
	.then((obj) => {
		return obj.json();
	})
	.then((obj) => {
		// レスポンスデータを出力
		console.log(JSON.stringify(obj))
	});

import * as fetch from "isomorphic-fetch";

describe("Hello APIテストサンプル", () => {

    const BASE_URL = "http://localhost:3000";
    const reqParam: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "cache": "no-cache"
        }
    };

    it("正常動作テスト", (done) => {
        //期待する戻り値
        const refObj={ message : '/hello のリクエストを受けました' };
        // パラメータの設定
        const url = BASE_URL + "/hello";
        // リクエスト送信
        fetch(url, reqParam)
            .then((obj) => {
                return obj.json();
            })
            .then((obj) => {
                // レスポンスデータを評価
                expect(obj).toEqual(refObj);
                done();
            })
            .catch((e) => console.error(e.message));
    });

    it("URL不一致テスト", (done) => {
        //期待する戻り値
        const refObj= { message : '該当するパスがありません' };
       // パラメータの設定
        const url = BASE_URL + "/test";
        // リクエスト送信
        fetch(url, reqParam)
            .then((obj) => {
                return obj.json();
            })
            .then((obj) => {
                // レスポンスデータを評価
                expect(obj).toEqual(refObj);
                done();
            })
            .catch((e) => console.error(e.message));
    })
});

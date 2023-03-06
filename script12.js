
// fetch 函數 回傳一個 Promise
let f = fetch("https://api.kcg.gov.tw/api/service/get/06ffc7ef-91cb-449e-8e16-3f73162c34f7");
f.then(function (datas) {
    console.log(datas);
    return datas.json(); // .json() 也是回傳一個 promise， return 會到下一個 .then 接住
}).then(function (jsondatas) {
    console.log(jsondatas);
});

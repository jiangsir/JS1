// async await 
// async 指定這個函數是一個 非同步函數
// await 只能用在 async 函數內。也只能用在回傳 promise 的 function 上。

function sendRequest() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve("耗時兩秒的指令(如 fetch)");
            reject("網路不通，執行失敗");
        }, 2000);
    });
}

let pm = sendRequest();
pm.then(function (resolvemessage) {
    console.log(resolvemessage);
}).catch(function (rejectmessage) {
    console.log("透過 then catch 捕獲 reject." + rejectmessage);
});

// 宣告一個 async function
async function getResolveMessage() {
    try {
        // 用 await 來執行 sendRequest
        let resolvemessage = await sendRequest();
        console.log(resolvemessage);
    } catch (error) {
        console.log("透過 try catch 捕獲 reject. " + error);
    }
}

getResolveMessage();


// 用 async await 實作 fetch 
async function getDatas() {
    let dataurl = "https://api.kcg.gov.tw/api/service/get/ddf31f47-e274-4a17-bd0d-ae2aee864922"
    let jsondatas = await (await fetch(dataurl)).json();

    console.log(`typeof jsondatas: ${Array.isArray(jsondatas) ? "是 array" : "是 Object"}`);
    console.log(`typeof jsondatas.data: ${Array.isArray(jsondatas.data) ? "是 array" : "是 Object"}`);
    console.log(`jsondatas= ${jsondatas}`);
    console.log(jsondatas["data"]);  // 取得 object 內的 key="data" 的資料
    console.log(jsondatas.data);  // 取得 object 內的 key="data" 的資料
}

getDatas();
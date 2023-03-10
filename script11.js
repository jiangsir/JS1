// callback 容易陷入 callback hell

// promise 狀態: pending(等待), reject(拒絕), resolve(履行)

let isSuccessed = false;
// let isSuccessed = true;

let p = new Promise(function (resolve, reject) {
    if (isSuccessed) {
        console.log("fetch img");
        resolve("完成後回傳值放在這裡 -- fetch img");
    } else {
        console.log("fetch img error");
        reject("reject後回傳值放在這裡 -- fetch img error");
    }
});

p.then(function (resolvemessage) {
    console.log(`promise 完成 -- ${resolvemessage} (此處接收 resolve() 的回傳值)`)
})
    .catch(function (rejectmessage) { // 要用 .catch() 來捕捉 reject 錯誤。
        console.log(`promise 遇到錯誤 -- ${rejectmessage} (此處接收 reject() 的回傳值)`);
    });


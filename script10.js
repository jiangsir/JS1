// 異步執行
console.log(1)

// 等待 1000ms 之後執行 callback 函數
//setTimeout(callback, 1000);

// 1. 直接設計匿名函數
setTimeout(function () {
    console.log(2);
}, 1000);

// 2. 外部函數
console.log(1)
function showTwo(){
    console.log(2);
}
setTimeout(showTwo, 1000); // 不會在這裡等待，會先執行 log(3) 再執行 showTwo
console.log(3)

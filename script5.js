// 函式
function add(n1, n2) {
    return n1 + n2
}

document.write(add(10, 23) + "<br>")

// 字串串接
function hello(name) {
    return `Hello, ${name}`;
}
document.write(hello("World") + "<br>")

// 參數給定預設值
function hello(name = "World") {
    return `Hello, ${name}`;
}
document.write(hello() + "<br>")
document.write(hello("Cookie") + "<br>")

// this 關鍵字
function whatIsThis() {
    console.log("this is" + this)
}
let wit = {
    witkey: whatIsThis
}
whatIsThis()  // window
wit.witkey()  // object


// 箭頭函數
// 基本用法
const arrow1 = (param1, param2) => { param1 ** param2 }

// 沒有參數的 arrow function
const arrow2 = () => console.log("run arrow2")

// 僅有一個參數時，可省略括號
const arrow3 = params => { params ** 2 }

// 單一運算後直接回傳時，可省略大括號
const arrow4 = params => params ** 2


// this 用法
// 箭頭函式中的 this，會依據函式在哪裡建立而決定，而非與一般函式一樣，依照執行時被呼叫的地方決定。
var tmp = 'a'
var obj = {
    tmp: 'b',
    func: () => console.log(this.tmp)
}
console.log(tmp)  // a
obj.func()  // a 
// 由於 obj.func 是在全域環境中建立，this 就被綁訂到全域環境中

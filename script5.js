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

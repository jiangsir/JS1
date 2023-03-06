// event listener
function button_click(e) {
    console.log("button_click() 啟動")
    e.innerText = "不要按"
}


let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", function () {
    console.log("btn2 click 發生")
    this.innerText = "btn2 不要按"
});


let img = document.getElementById("img")
img.addEventListener("mouseover", function () {
    this.src = "cat2.png"
});

img.addEventListener("mouseout", function () {
    this.src = "cat1.png"
});

document.addEventListener("keydown", function (e) {
    img.src = "cat2.png"
    console.log(e.code)
});

document.addEventListener("keyup", function (e) {
    img.src = "cat1.png"
    console.log(e.code)
});

// function(event): event object
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function (event) {
    console.log(event.clientX, event.clientY);
    console.log("觀察 event 有哪些可用的屬性:", event);
});
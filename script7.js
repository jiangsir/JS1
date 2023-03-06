// 網頁元素

books.push("書名4"); // 插入元素到尾部
books.unshift("書名0"); // 插入元素到頭部
books.pop(); // 刪除尾部元素
books.shift(); // 刪除頭部元素

for (var i=0; i<books.length; i++){
    document.write(books[i] + "<br>");
}

// JavaScript BOM (Browser Object Model)
// window 是一個全域物件，因此可以省略

// window.screen.width

// Document 負責處理 html 的標籤
// Document (DOM)

var s = document.getElementById("myheader")

s.style.backgroundColor = "red"
console.log(s.innerText)

var nknush = document.getElementById("nknush")

console.log(nknush.href)

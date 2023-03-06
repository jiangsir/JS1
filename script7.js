// 陣列遍歷
var books = ["書名1","書名2","書名3"]

books.push("書名4"); // 插入元素到尾部
books.unshift("書名0"); // 插入元素到頭部
books.pop(); // 刪除尾部元素
books.shift(); // 刪除頭部元素

for (var i=0; i<books.length; i++){
    document.write(books[i] + "<br>");
}


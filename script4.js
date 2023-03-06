// 陣列
var ints = [5, 7, 9, 1, 3, 2];
var strings = ["字串1", "字串2"];
var mixs = ["字串1", 689, false, 8.7];

// 陣列遍歷
var books = ["書名1","書名2","書名3"];
books.push("書名4"); // 插入元素到尾部
books.unshift("書名0"); // 插入元素到頭部
books.pop(); // 刪除尾部元素
books.shift(); // 刪除頭部元素

for (var i=0; i<books.length; i++){
    document.write(books[i] + "<br>");
}

// 字串分割
var str = 'a,b,c,d,e';
var strAry = str.split(',');
// 輸出 ["a", "b", "c", "d", "e"]
console.log(strAry);


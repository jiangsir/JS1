// 物件
var person = {
    name: "Tom",
    age: 15,
    weight: 52.3,
    print: function () {
        document.write("I am " + this.name)
    }
}

document.write(person.age)
document.write("<br>")
person.print()
document.write("<br>")


var book = {
    title: "書名",
    cost: 52.3,
    authors: [
        {
            name: "作者1",
            age: 32
        }, {
            name: "作者2",
            age: 69
        }
    ]
}

document.write(book.title)
document.write(book.authors[1].name)
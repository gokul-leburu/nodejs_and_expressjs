const fs=require("fs")
const x=fs.readFileSync("./data/book.json")
const y=x.toString()
const data=JSON.parse(y)
fs.writeFileSync("./data/books.json",JSON.stringify(data))
data.map((i)=>console.log(i.title+" "+i.date))
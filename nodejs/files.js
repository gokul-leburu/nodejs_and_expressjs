const fs=require("fs")
const path=require("path")
const filepath=path.join("E:/bajaj training/node js/data","index.html")
console.log(filepath)
const data=fs.readFileSync(filepath,'utf-8')
console.log(data)
fs.writeFileSync("E:/bajaj training/node js/data/sample2.txt",data)
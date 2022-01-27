// 1. write the os specs to a file using sync
console.log("*******************write the os specs to a file using sync*********************")
const os =require("os")
const os_data={"type":os.type(),"release":os.release(),"uptime":os.uptime(),"total memory":os.totalmem(),"free memory":os.freemem()}
const path=require("path")
const fs=require("fs")
fs.appendFileSync("./data/os_data.txt","\n"+JSON.stringify(os_data),{'flags': 'a'})
console.log(fs.readFileSync("./data/os_data.txt","utf-8"))
//2. write diff types of data to a file and read it
console.log("*******************diff types of data**************************")
fs.writeFileSync("./data/helloworld.html","<html> \n <body> \n <h1>hello world</h1> \n </body>\n</html>")
const x=fs.readFileSync("./data/helloworld.html","utf-8")
console.log(x)

// 3. merge two file with sync Write 
console.log("******************merging two files sample and sample2 into sample3********************")
const f1=fs.readFileSync("./data/sample.txt","utf-8")
const f2=fs.readFileSync("./data/sample2.txt","utf-8")
fs.writeFileSync("./data/sample3.txt",f1+"\n"+f2)
console.log(fs.readFileSync("./data/sample3.txt","utf-8"))

// 4 . methods with os and path module
// os module path module fs module
/*const os=require("os")
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())
console.log(__dirname)
console.log(__filename)*/
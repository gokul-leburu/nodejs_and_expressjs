const path=require("path")
const fs=require("fs")

const add=(a,b)=>{
    const data={"title":a,"date of published":b}
    fs.appendFileSync("./data/book.json","\n"+JSON.stringify(data))
    console.log(fs.readFileSync("./data/book.json","utf-8"))
}
const yargs=require("yargs")
const argv=yargs.argv
const command=argv._[0]
const title=argv._[1]
const date=argv._[2]
if(command==="add")
{
    add(title,date)
}

const path=require("path")
const fs=require("fs")
const yargs=require("yargs")
//view 
const view=()=>
{
    const data=get()
    console.log("the details of the books are:")
    console.log()
    data.map((i)=>console.log(`title :${i.title} date :${i.date}`))
}
//add
const add=(a,b)=>{

    const data=get()
    let bool=true
    data.map((i)=>{
        if(i.title==a)
        {
            bool=false
        }
    })
    if(bool)
    {
        data.push({"title":a,"date":b})
        fs.writeFileSync("./data/book.json",JSON.stringify(data))
        console.log("added succefully")
    }
    else
    {
        console.log("duplicate found thus not added")
    }
}
//delete
const del=(a)=>
{
    const data=get()
    let bool=true
    let temp
    data.map((i)=>{
        if(i.title==a)
        {
            temp=i
            bool=false
        }
    })
    if(bool)
    {
        console.log("title not found no del operation has been done")
    }
    else{
        data.pop(temp)
        fs.writeFileSync("./data/book.json",JSON.stringify(data))
        console.log("the title has been successfully deleted")
    }
}
const get=()=>
{
    try
    {
        const temp=fs.readFileSync("./data/book.json")
        return JSON.parse(temp)
    }
    catch
    {
        return []
    }
}

const argv=yargs.argv
const command=argv._[0]
if(command==="add")
{
    const title=argv._[1]
    const date=argv._[2]
    add(title,date)
}
if(command==="view")
{
    view()
}
if(command==="del")
{
    const title=argv._[1]
    del(title)
}



const http=require("http")
const {type}=require("os")
const url=require("url")
const app=http.createServer((req,res)=>
{
    const querydata=url.parse(req.url,true)
    res.write("<h1>gokul</h1>")
    console.log(querydata.pathname)
    const search=querydata.query.search
    const price=querydata.query.price

    res.writeHead(200,{"Content-type":"text/html"})
        if(search==="redmi")
        {
            res.write("<h1>redmi phones are available</h1>")
            res.end()
        }
    /*else if(querydata.pathname==="/name")
    {
        res.write("<h1>name one</h1>")
    }*/
})
app.listen(3000,()=>console.log("server as started http://localhost:3000/"))


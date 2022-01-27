function dollar(s)
{
    let temp=""
    s=s.split(" ")
    s.map((i)=>
    {
        if(i.charAt(0)=="$")
        {
            temp=i.slice(1,i.length)
        }
    })
    return temp
}
let s ="We have a cost in the form $120"
console.log(dollar(s))
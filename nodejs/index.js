const members=
[
    {
        membername:"john",
        memberid:"john123"
    },
    {
        membername:"smith",
        memberid:"smith678"
    },
]
const test1=()=>
{
    console.log("test1")
}
const test2=()=>
{
    console.log("test2")
}
const test3=(id,name)=>
{
    console.log(`id of the member is ${id} and name is ${name}`)
}
module.exports={test1,test2,test3,members}
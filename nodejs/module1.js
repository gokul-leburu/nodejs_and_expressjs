const {test1,test2,test3,members}=require("./index")

test1()
test2()
members.map((i)=>test3(i.memberid,i.membername))
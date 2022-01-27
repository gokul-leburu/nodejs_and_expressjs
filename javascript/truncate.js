function truncate(s,maxlength)
{
    if(s.length>maxlength)
    {
        s=s.slice(0,maxlength)+"..."
    }
    return s
}
console.log(truncate("What I'd like to tell on this topic is:", 20))
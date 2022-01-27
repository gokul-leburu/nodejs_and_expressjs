function filterRange(arr,a,b)
{
    let arr1=[]
    arr.map((i)=>{
        if(i>=a && i<=b)
        {
            arr1.push(i)
        }
    })
    return arr1
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
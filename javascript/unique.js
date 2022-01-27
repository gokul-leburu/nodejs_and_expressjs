function unique_elements(arr) {
    let temp=new Set()
    for(let i=0;i<arr.length;i++)
    {
        temp.add(arr[i])
    }
    return Array.from(temp)
   }
   let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
    "JavaScript", "JavaScript", "React Js", "React Js"
   ];
   console.log(unique_elements(strings));
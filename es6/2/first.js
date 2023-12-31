async function getdata(){
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let d = await data.json();
        for(let i of d) 
        {
            document.write(`name : ${i.name} , email: ${i.email} <br>`);
        }
    } catch (error) {
        console.log(error);
    }
}

let data = fetch("https://jsonplaceholder.typicode.com/users").then((d)=>d.json()).then((data)=>
{
for(let i of data) 
        {
            document.write(`name : ${i.name} , email: ${i.email} <br>`);
        }
    } 
)
getdata();
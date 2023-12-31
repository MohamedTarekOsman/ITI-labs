var arr=["mohamed","ahmed","abdo","sayed"]
var arr2=[];
while(arr2[0]==arr2[1]){
    arr2[0]=arr[Math.floor(Math.random()*arr.length)];
    arr2[1]=arr[Math.floor(Math.random()*arr.length)];
}
document.write(arr2[0]);
document.write(arr2[1]);
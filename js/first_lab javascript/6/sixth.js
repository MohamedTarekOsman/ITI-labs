var arr=[];
for(var i=0;i<3;i++){
    arr[i]=prompt("Enter number "+(i+1));
}

document.write(
  "sum of 3 values = &nbsp" +
    arr[0] +
    "+" +
    arr[1] +
    "+" +
    arr[2] +
    "=" +
    (parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2])) +
    "<br>"
); 
document.write(
  "multiply of 3 values = &nbsp" +
    arr[0] +
    "*" +
    arr[1] +
    "*" +
    arr[2] +
    "=" +
    arr[0] * arr[1] * arr[2] +
    "<br>"
);
document.write(
  "division of 3 values = &nbsp" +
    arr[0] +
    "/" +
    arr[1] +
    "/" +
    arr[2] +
    "=" +
    (arr[0] / arr[1] / arr[2])+"<br>"
);
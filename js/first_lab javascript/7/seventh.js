var arr=[];
for(var i=0;i<5;i++){
    arr[i]=prompt("Enter number"+(i+1));
}
    document.write("<span>u have entered the values of </span>" + arr + "<br>");
for(var i=0;i<5;i++){
    for (var j = 0; j < i; j++)
        if ((parseInt(arr[i]) < (parseInt(arr[j])))) {
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
}
document.write("<span>ur value after being sorted ascending </span>" + arr+"<br>");

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i; j++)
    if (parseInt( arr[i] )>parseInt( arr[j])) {
      var x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
}
document.write("<span>ur value after being sorted descending </span>" + arr+"<br>");
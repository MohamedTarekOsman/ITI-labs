var message = prompt("Enter Message");
var casesesetive = prompt("palindrome case sensitive? (yes/no)");
var flag1=false;
var flag2=false;
if(casesesetive == "yes"){
  for (var i = 0; i < message.length; i++) {
      if (message[i] !== message[message.length - 1 - i]) {
       flag1=false;
      } else {
        flag1 = true;
      }
  }
  if(flag1==false){
    console.log("Not a palindrome");
  }else{
    console.log("Palindrome");
  }
}else if(casesesetive == "no")
{
    for (var i = 0; i < message.length; i++) {
      if (message[i].toUpperCase !== message[message.length - 1 - i].toUpperCase) {
        flag2 = false;
      } else {
        flag2 = true;
      }
    }
    if (flag2 == false) {
      console.log("Not a palindrome");
    } else {
      console.log("Palindrome");
    }
}
else{
  console.log("Invalid Input");
}
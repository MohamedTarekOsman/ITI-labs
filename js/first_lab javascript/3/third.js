var message = prompt("Enter Message");
var count = 0;
for (var i = 0; i < message.length; i++) {
  if (message[i] == "e") {
    count++;
  }
}
console.log(count);

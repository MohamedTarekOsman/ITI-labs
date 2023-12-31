var message = prompt("Enter Message");
var letter = prompt("Enter Letter");
var count = 0;
for (var i = 0; i < message.length; i++) {
  if (message[i] == letter) {
    count++;
  }
}
document.write(count);

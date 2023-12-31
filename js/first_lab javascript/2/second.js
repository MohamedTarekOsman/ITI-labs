var total = 0;
for (var i = 1; ; i++) {
  if (message == 0 || total >= 100) {
    break;
  }
  do {
    var message = parseInt(prompt("Enter number"));
  } while (message.toString() == "NaN");
  console.log(message);
  total = total + message;
}
document.write(total);

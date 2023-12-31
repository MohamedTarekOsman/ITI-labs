var name ;
var phoneNumber ;
var mobileNumber ;
var email;
var validate ;
var color;
let today = new Date().toISOString().slice(0, 10);
do{
  name= prompt("Enter your name");
  validate = /^[a-zA-Z ]+$/.test(name);
}
while(!validate);
do {
  phoneNumber = prompt("Enter your phone number");
  validate = /^\d{8}$/.test(phoneNumber);
} while (!validate);
do {
  mobileNumber = prompt("Enter your mobile number");
  validate = /^(010)|(011)|(012)\d{8}$/.test(mobileNumber);
} while (!validate);
do {
  email = prompt("Enter your email");
  validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
} while (!validate);
do {
  color = prompt("Enter your favorite color");
  validate = /^red|green|blue$/i.test(color);
} while (!validate);

    document.getElementById("wel").style.color = color.toString();
    document.getElementById("weln").innerHTML = name;
    document.getElementById("wel1").style.color = color.toString();
    document.getElementById("welp").innerHTML = phoneNumber;
    document.getElementById("wel2").style.color = color.toString();
    document.getElementById("welm").innerHTML = mobileNumber;
    document.getElementById("wel3").style.color = color.toString();
    document.getElementById("wele").innerHTML = email;
    document.getElementById("wel4").style.color = color.toString();
    document.getElementById("welt").innerHTML = today;





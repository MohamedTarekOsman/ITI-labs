var num=prompt("Enter a number");
if(num%3==0&&num%5!=0)
{
    document.write("fizz");
}
else if(num%5==0&&num%3!=0)
{
    document.write("buzz");
}else if(num%3==0&&num%5==0)
{
    document.write("fizz buzz");
}else
{
    document.write("none");
}
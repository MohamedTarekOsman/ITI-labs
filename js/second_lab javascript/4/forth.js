var f =confirm("Do you fly?");
if (f) {
   var s=confirm("are you a wild?");
    if (s) {
        document.write("Eagle");
    }else{
        document.write("Parrot");
    }
}else{
  var t=confirm("do you live under sea?");
  if(t){
      var fourth=confirm("are you wild?");
      if(fourth){
          document.write("shark");
      }else{
          document.write("dolphin");
      }
  }else{
      var fifth=confirm("are you wild?");
      if(fifth){
          document.write("lion");
      }else{
          document.write("cat");
      }
  }
}
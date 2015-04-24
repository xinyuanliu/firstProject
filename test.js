var a = function(){
  var t = new Date();
  for(var i = 0; i < 100000000; i++){
    var a = 1;
    var b = 2;
    var c = 3;
  }
  console.log(new Date() - t);
}

var b = function(){
  var t = new Date();
  for(var i = 0; i < 100000000; i++){
    var a = 1, b = 2, c = 3;
  }
  console.log(new Date() - t);
}

a();
b();
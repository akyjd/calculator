var screen = document.getElementById("display");
var signs = [ "/", "*", "+", "-"]; 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var clicks = 0;
function addtoscreen (par){
      if (clicks === 0 && numbers.includes(par)){
        screen.value = "0";
      } 
      clicks = clicks + 1; 
      if (screen.value[screen.value.length-1] === ")" && numbers.includes(par)){
        par = "";
      }
      else if (screen.value === "0" && par >= 0){
        screen.value = "";
      } 
      else if ( screen.value === "0" && par === "."){
        screen.value = "0"; 
      }
  //    else if ( screen.value === "0" && par === "-"){
  //      screen.value = ""; 
  //    }
      else if (signs.includes(par) && signs.includes(screen.value[screen.value.length-1])){
        var x = screen.value.split("");
        screen.value = x.slice(0, -1).join('');
      }
      
      else if (par === "."){
        if (numbers.includes(screen.value[screen.value.length-1])){
        var plus = screen.value.lastIndexOf('+');
        var minus = screen.value.lastIndexOf('-');
        var puta = screen.value.lastIndexOf('*');
        var divide = screen.value.lastIndexOf('/');
        var dot = screen.value.lastIndexOf('.');
          if (plus, minus, puta, divide, dot === -1){
            par = ".";
          }
          else if (plus > dot || minus>dot|| puta>dot|| divide > dot){
            par = ".";
          }else{
            par = "";
          }
        } else {
          par = "";
        }
      }
      screen.value = screen.value + par;
}

function plusminus (){
  clicks = clicks + 1;
  // ignore last sign if the last value is not a number
  if (signs.includes(screen.value[screen.value.length-1])){
    var x = screen.value.split("");
    screen.value = x.slice(0, -1).join('');
  }
  // check and find last number
  var plus = screen.value.lastIndexOf('+');
  var minus = screen.value.lastIndexOf('-');
  var puta = screen.value.lastIndexOf('*');
  var divide = screen.value.lastIndexOf('/');
  var maxNum = Math.max(plus, minus, puta, divide);
  var lastNumber = screen.value.slice(maxNum+1);
  var firstNumber = screen.value.slice(0, maxNum+1);
  var x;
  if (lastNumber[lastNumber.length-1] === ")"){
    var x = lastNumber.slice(0, -1);
    firstNumber = firstNumber.slice(0, -2);
  } else {
    var x = "(-" + lastNumber + ")";
  }
  screen.value =  firstNumber + x;
}

function clearall (){
      screen.value = "0";
}

function answer(){
 clicks =0;
 if (signs.includes(screen.value[screen.value.length-1])){
    var x = screen.value.split("");
    screen.value = x.slice(0, -1).join('');
  }
      screen.value = eval(screen.value);
}
    
function backspace(){
  clicks = clicks + 1;
  // if you delete ) 
      if (screen.value[screen.value.length-1] === ")"){
        var bracket = screen.value.lastIndexOf('(');
        var lastNumber = screen.value.slice(bracket);
        var firstNumber = screen.value.slice(0, bracket);
        if (firstNumber === ""){
        firstNumber = "0";
      }
        screen.value = firstNumber;
      }
  
      else if (screen.value === "0"){
        screen.value;
      } 
      else if (screen.value.length === 1){
        screen.value = "0";
      }
      else {
        var x = screen.value.split("");
        screen.value = x.slice(0, -1).join('');
      }
}
    
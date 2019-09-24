"use strict"
var score=0;
var count=0;
function call(){
  fn1();
  fn2();
}
function next() {
  count+=1;
  var q1=document.getElementById(""+count);
  var q2=document.getElementById(""+(count+1));
  q1.setAttribute("style", "display:none;");
  q2.setAttribute("style", "display:block;");


}
function previous() {
  var q1=document.getElementById(""+count);
  var q2=document.getElementById(""+(count+1));
  q1.setAttribute("style", "display:block;");
  q2.setAttribute("style", "display:none;");
  count-=1;


}
function fn1(){
  var rd1=document.getElementById("rd1");
  var rd2=document.getElementById("rd2");


  if(rd1.checked==true)
  score+=Number(rd1.value);
  else if(rd2.checked==true)
  score+=Number(rd2.value);
}

  function fn2(){
    var rd3=document.getElementById("rd3");
    var rd4=document.getElementById("rd4");


    if(rd3.checked==true)
    score+=Number(rd3.value);
    else if(rd4.checked==true)
    score+=Number(rd4.value);
    alert(""+score);
  }

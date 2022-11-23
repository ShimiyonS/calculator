let div1=document.createElement("div");
div1.setAttribute("class","div1");
let div2=document.createElement('div');
div2.setAttribute("class","div2");
div1.append(div2);
document.body.append(div1);


let button0=document.createElement("button");
button0.innerHTML="0";
button0.setAttribute("onclick","display('0')");

let button1=document.createElement("button");
button1.innerHTML="1";
button1.setAttribute("onclick","display('1')");

let button2=document.createElement("button");
button2.innerHTML="2";
button2.setAttribute("onclick",'display("2")');

let button3=document.createElement("button");
button3.innerHTML="3";
button3.setAttribute("onclick","display('3')");

let button4=document.createElement("button");
button4.innerHTML="4";
button4.setAttribute("onclick","display('4')");

let button5=document.createElement("button");
button5.innerHTML="5";
button5.setAttribute("onclick","display('5')");

let button6=document.createElement("button");
button6.innerHTML="6";
button6.setAttribute("onclick","display('6')");

let button7=document.createElement("button");
button7.innerHTML="7";
button7.setAttribute("onclick","display('7')");

let button8=document.createElement("button");
button8.innerHTML="8";
button8.setAttribute("onclick","display('8')");

let button9=document.createElement("button");
button9.innerHTML="9";
button9.setAttribute("onclick","display('9')");

let button00=document.createElement("button");
button00.innerHTML="00";
button00.setAttribute("onclick","display('00')");

let buttonc=document.createElement("button");
buttonc.innerHTML="C";
buttonc.setAttribute("onclick","Clear()");

let buttond=document.createElement("button");
buttond.innerHTML="DEL";
buttond.setAttribute("onclick","deleteChar()");

let buttonp=document.createElement("button");
buttonp.innerHTML=".";
buttonp.setAttribute("onclick",'display(".")');

let display1=document.createElement("input");
display1.innerHTML='';
display1.setAttribute("placeholder",'0');
display1.setAttribute("id","outPut-Screen");

let multi=document.createElement("button");
multi.innerHTML="X";
multi.setAttribute("onclick",'display("*")');

let devition=document.createElement("button");
devition.innerHTML="/";
devition.setAttribute("onclick",'display("/")');

let sub=document.createElement("button");
sub.innerHTML="-";
sub.setAttribute("onclick",'display("-")');

let add=document.createElement("button");
add.innerHTML="+";
add.setAttribute("onclick",'display("+")');

let sum=document.createElement("button");
sum.innerHTML="=";
sum.setAttribute("onclick","Calculate()");
sum.setAttribute("class","equal");

div2.append(display1,buttonc,buttond,buttonp,multi,button7,button8,button9,devition,button4,button5,button6,sub,button1,button2,button3,add,button0,button00,sum);


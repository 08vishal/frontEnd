var amt=prompt("enter amount in integer");
var ans="enter the input as integer";
if(1==1){
    if(amt>0 && amt<20)ans=3;
    else if(amt<50 && amt>20)ans=6;
    else if(amt<75 && amt>50)ans=12;
    else if( amt>75)ans=14;
     
}

document.getElementById("demo").innerHTML="<h1>"+ans+"</h1>";

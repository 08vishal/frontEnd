var amt=prompt("enter amount in integer");
var ans="enter the input as integer";
function randomNumber(min,max){
    let couponValue=0;

    couponValue=Math.random() * (max - min) + min;
    return Math.floor(couponValue);

}
if(1==1){
    if(amt>0 && amt<20)ans=randomNumber(1,3);
    else if(amt<50 && amt>20)ans=randomNumber(3,6);
    else if(amt<75 && amt>50)ans=randomNumber(6,12);
    else if( amt>75)ans=randomNumber(12,20);
     
}

document.getElementById("demo").innerHTML="<h1>"+ans+"</h1>";

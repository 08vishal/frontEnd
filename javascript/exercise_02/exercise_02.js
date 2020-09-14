var myMath={
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        alert("minus method is deprecated, please use subtract instead");
        return a-b;
    },
    divide : function(a,b){
        let ans=0
        b!=0?ans= a/b:ans="undefined";
        return ans;
    },
    multiply:function(a,b){
        return a*b;
    },
    subtract: function(a,b){
        return a-b;
    },
    power: function(a,b){
        let ans=1;
        for(let i=0;i<b;i++){
            ans=ans*a;
        }
        return ans;
    },
   max: function(a){
       return Math.max(...a);
   } 


}
var c=myMath.add(3,5);
var a=[2,3,5,'78',Infinity];
console.log(myMath.max(a));
console.log(c);
console.log(myMath.divide(3,4));
console.log(myMath.divide(3,0));
console.log(myMath.minus(4,5));
console.log(myMath.minus(3,2));
console.log(myMath.multiply(3,4));
console.log(myMath.power(3,4));
myMath.minus=
document.getElementById("demo").innerHTML="<h1>dasj</h1>"+c;
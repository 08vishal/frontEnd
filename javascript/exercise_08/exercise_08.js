function loadData() {
   
    $.ajax({
        
      url: "https://api.covid19api.com/summary",
      type: "GET",
      dataType: 'JSON',
      success: function(data) {
        document.getElementById("total_confirmed").innerHTML=data.Global.TotalConfirmed
        document.getElementById("total_deaths").innerHTML=data.Global.TotalDeaths
        document.getElementById("total_recovered").innerHTML=data.Global.TotalRecovered 
     
    }
      
})}

console.log(loadData());
var strSel;
function GetSelectedItem(el)
{
    var e = document.getElementById(el);
     strSel= e.options[e.selectedIndex].value;
    showdataOfCountry(strSel.toLowerCase());
}
function showdataOfCountry(x){

var settings = {
    "url": "https://api.covid19api.com/live/country/"+x+"/status/confirmed",
    "method": "GET",
    "timeout": 0,
  };
  
  
  $.ajax(settings).done(function (response) {
    
    
    response.forEach(function(item,index) {
       total_confirmed+=item.Confirmed
       total_death+=item.Deaths
       total_recovered+=item.Recovered
       
    })

    //console.log(total)
    document.getElementById("total_confirmed").innerHTML=total_confirmed
    document.getElementById("total_deaths").innerHTML=total_death
    document.getElementById("total_recovered").innerHTML=total_recovered
  });
}
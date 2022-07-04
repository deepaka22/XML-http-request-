var request = new XMLHttpRequest();
request.open( 'GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse (request.response)
    for (var i in data ){
       console.log(data[i]["flags"]) // taks 2 To console all flags..
    console.log(data [i].name.common + ', '+ data[i].region + ' ,'+ data[i].subregion + ' ,'+ data [i].population )//task 3  
    }
}
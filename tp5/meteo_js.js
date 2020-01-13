window.onload = function(){
    document.getElementById("searchCity").addEventListener("submit", function(event){
		event.preventDefault(); // pour annuler le rechargement de la page
        var city = document.getElementById("city").value;
		searchCity(city);
    });	
}

function searchCity(_city){
    console.log('searchCity','Hello from '+_city);
    //A compléter dans la suite du TP
	
	var request =   new XMLHttpRequest();
    request.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+_city+'&appid=0ada432b59deb9716c357092c5f79be6',true);
    request.onload = function() {
		if (request.status >=200 && request.status <400) {
			// Success!
			var responseJSON = JSON.parse(request.responseText);
			console.log(responseJSON);
			document.getElementById("result").innerHTML = responseJSON.name + " " + responseJSON.main.temp +" K°";
			//VOTRE CODE JS pour afficher les données météo sur votre page
			// en mettant à jour la DIV “result”
		} else {
			// We reached our target server, but it returned an error
		}
	};
	
    request.onerror = function() {
            // There was a connection error of some sort
    };
	
    request.send();
}
	
	
function searchLatLng(_lat, _lng){
    console.log(searchLatLng,'Hello from '+_lat+','+_lng);
    //A compléter dans la suite du TP
}
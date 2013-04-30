var plants;

function skipDay(){}

function updateWorld(){}

function drawWorld(){
	
	var world = "";

	for(var i = 0; i < 30; i++){
		for(var j = 0; j < 100; j++){
			world += ".";
		}
		world += "<br>";
	}
	document.getElementById("world").innerHTML = world;
}

function addPlants(){
	
}
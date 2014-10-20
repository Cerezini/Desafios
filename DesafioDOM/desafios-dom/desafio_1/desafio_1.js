addListener(window, "load", function() {
	//codigo aqui
	var infoDiv = document.getElementById("info");
	var div = document.createElement("div");
	var answer = "";
	
	answer = document.getElementsByTagName("blockquote")[0].getAttribute("cite");
	console.log(answer);
	//var elem = document.getElementsByTagName("blockquote");
	
	
	
	
	//div.appendChild(document.createTextNode(answer));
});

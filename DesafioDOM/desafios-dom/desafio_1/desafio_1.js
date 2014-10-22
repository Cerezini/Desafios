addListener(window, "load", function() {
	//codigo aqui
	var answer = "";
	var answers = [];
	
	//1
	answer = document.getElementsByTagName("blockquote")[0].getAttribute("cite");
	answers.push(answer);
	
	//2
	answer = document.getElementsByTagName("ins")[0].getAttribute("datetime") + " ";
	answer += document.getElementsByTagName("del")[0].getAttribute("datetime");
	answers.push(answer);
	
	//3
	var elem = document.getElementsByTagName("p")[1];
	answer = elem.getElementsByTagName("cite")[0].innerHTML + " ";
	answer += elem.getElementsByTagName("q")[0].getAttribute("lang");
	answers.push(answer);
	
	//4
	answer = document.getElementById("t1").getAttribute("summary");
	answers.push(answer);
	
	//5 - why not lastChild?
	answer = document.getElementById("t1_3").parentNode.lastElementChild.innerHTML;
	answers.push(answer);
	//console.log(answers);
	
	var infoDiv = document.getElementById("info");
	for(i=0;i<answers.length;i++){
		var div = document.createElement("div");
		div.appendChild(document.createTextNode(answers[i]));
		infoDiv.appendChild(div);
	}
});

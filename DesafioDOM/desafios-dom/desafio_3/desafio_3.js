function addListener(node, type, handler) {
		if (node.addEventListener) {
			node.addEventListener(type, handler, false);
		} else if (node.attachEvent) {
			node.attachEvent("on"+type, handler);
		} else {
			node["on"+type] = handler;
		}
	}

function stopProp(e) {
	e = e || event;
	
	e.cancelBubble = true;
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	
	return e;
}

function cancelDefault(e) {
	e = e || event;
	
	e.returnValue = false;
	if (e.preventDefault) {
		e.preventDefault();
	}
	
	return e;
}

addListener(window, "load", function() {
    //codigo aqui
	
	var elem = document.getElementById("control").children;
	elem[0].addEventListener("click",Task.handlerButtonAdd);
	elem[1].addEventListener('click',Task.handlerButtonRemove);
	
	document.getElementById("pool").firstElementChild.addEventListener("click",Task.handlerThing);
});

var qtdPool = 0;
var colors = ["orange","red","blue","silver","green","brown","yellow","pink"];

var Task = {
	handlerButtonAdd: function(e){
		
		var color = document.createElement("button");
		color.appendChild(document.createTextNode("color"));
		
		var remover = document.createElement("a");
		remover.appendChild(document.createTextNode("remover"));
		remover.setAttribute("href","#");
		
		var div = document.createElement("div");
		div.setAttribute("class","thing");
		div.addEventListener("click",Task.handlerThing);
		
		div.appendChild(color);
		div.appendChild(remover);
		document.getElementById("pool").appendChild(div);
		
		qtdPool += 1;
		document.getElementById("info").innerHTML = "A piscina contém " + qtdPool + " coisas";
	},
	
	handlerButtonRemove: function(e){
		
		var pool = document.getElementById("pool");
		while (pool.firstChild) {
			pool.removeChild(pool.firstChild);
		}
	},
	
	handlerThing: function(e){
		
		//console.log(e.srcElement);
		if(e.target.localName === "button"){
			var op = Math.floor(Math.random() * 7);
			var c = "background-color:" + colors[op];
			e.srcElement.setAttribute("style",c);
		}else if(e.target.localName === "a"){
			var div = e.currentTarget;
			div.parentNode.removeChild(div);
		}
	}
};

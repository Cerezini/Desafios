function addListener(node, type, handler) {
	if (node.addEventListener) {
		node.addEventListener(type, handler, false);
	} else if (node.attachEvent) {
		node.attachEvent("on"+type, handler);
	} else {
		node["on"+type] = handler;
	}
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
	//Tabs
	var elem = document.getElementById("tabs").children;
	elem[0].getElementsByTagName("a")[0].addEventListener("click",Task.handlerTab);
	elem[1].getElementsByTagName("a")[0].addEventListener('click',Task.handlerTab);
	elem[2].getElementsByTagName("a")[0].addEventListener('click',Task.handlerTab);
	
	//ColorTest
	elem = document.getElementById("info").lastElementChild.children;
	elem[0].getElementsByTagName("a")[0].addEventListener("click",Task.handlerColorTest);
	elem[1].getElementsByTagName("a")[0].addEventListener('click',Task.handlerColorTest);
	elem[2].getElementsByTagName("a")[0].addEventListener('click',Task.handlerColorTest);
});		

var Task = {
	handlerTab: function(e){
	
		var tabs = e.currentTarget.parentNode.parentNode;
		for(p=tabs.firstElementChild;p!=null;p=p.nextElementSibling){
			p.setAttribute("class","");
		}
		e.currentTarget.parentNode.setAttribute("class","selected");
		
		var content = document.getElementById("content");
		for(p=content.firstElementChild;p!=null;p=p.nextElementSibling){
			p.setAttribute("class","sheet"); 
		}
		var tab = e.currentTarget.innerHTML;
		//console.log(tab);
		switch(tab){
			case "Informações":
				content.children[0].setAttribute("class","intop");
				break;
			case "Correções":
				content.children[1].setAttribute("class","intop");
				break;
			case "Atualizações":
				content.children[2].setAttribute("class","intop");
				break;
			default:
				break;
		}
	},
	
	handlerColorTest: function(e){
		var colortest = document.getElementById("colortest");
		colortest.setAttribute("class",e.currentTarget.innerHTML);
		window.setTimeout(function() {
			colortest.setAttribute("class","");;
		}, 500);
		//console.log(e.currentTarget.innerHTML);
	}
};
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
});

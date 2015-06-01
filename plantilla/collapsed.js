var _click = "click";
//var _mover = "mover";  //DEPRECATED
var _expandType = _click;
var _autoExpand = false;
var ignite = false;
function init(){
	// Get deviceType
	screenad.event(screenad.deviceType);			
	if (!ignite){
		screenad.onSync = start;
		ignite = true;
	}		
}
function start (){			
	if (_expandType=== "click") {
		document.getElementById('container').addEventListener("click",showLayer)
	}/*
		else if (_expandType=== "mover"){				
		document.getElementById('container').addEventListener("mouseenter",showLayer)
	}*/			
	if (_autoExpand && ignite ){				
		showLayer();
	}
	screenad.setSize("300", "250");
	screenad.setAlignment("banner", "banner");
	screenad.setOffset(0, 0);
	screenad.setSticky(true);
	screenad.setZIndex(90);
	screenad.position();			
}
function showLayer(){
	screenad.event('user_expand');
	console.log("show_layer")
	screenad.show("all");
	screenad.shared.callMethod("PlayVideo");
}

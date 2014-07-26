var _cookieName = "mycolor";
var	_myColor = null;
var _colors = ['blue', 'red', 'yellow', 'green'];

function saveColor (color) {
	
	var d = new Date();
	d.setUTCHours(23, 59, 59);
	
	//d.setTime(d.getTime() + (9999*24*60*60*1000));

	document.cookie = _cookieName + "=" + _myColor + "; expires=" + d.toGMTString();
}

function loadColor () {
	var regexExpression = _cookieName + "=(" + _colors.join('|') + ")";
	
	var regexResult = document.cookie.match(regexExpression);
	
	if (regexResult == null) {
		return null;
	}
	
	for (k in _colors) {
		
		if (regexResult[1] == _colors[k]) {
			return regexResult[1]; 
		} 
	}
	
	return null;
}

function discoverColor () {
	var k = Math.ceil((Math.random() * _colors.length)) -1;
	
	return _colors[k];
}

_myColor = loadColor();

if (_myColor == null) {
	_myColor = discoverColor();
	saveColor();
}

// Showing result
document.getElementById('color').innerHTML = _myColor;
document.body.className = _myColor;

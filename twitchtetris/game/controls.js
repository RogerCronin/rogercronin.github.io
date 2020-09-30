var urlParams = new URLSearchParams(location.search)
var inputAssignments = {}
var map = {
	a: "a",
	b: "b",
	c: "c",
	d: "d",
	e: "e",
	f: "f",
	g: "g",
	h: "h",
	i: "i",
	j: "j",
	k: "k",
	l: "l",
	m: "m",
	n: "n",
	o: "o",
	p: "p",
	q: "q",
	r: "r",
	s: "s",
	t: "t",
	u: "u",
	v: "v",
	w: "w",
	x: "x",
	y: "y",
	z: "z",
	A: "space",
	B: "shift",
	C: "comma",
	D: "period",
	E: "left",
	F: "right",
	G: "up",
	H: "down",
	I: "ctrl",
	J: "alt",
	K: "forwardslash",
	L: "semicolon"
}

if(urlParams.get("controls") == null) {
	alert("Malformed controls query\nDidn't recieve string")
} else {
	controls = urlParams.get("controls").split("")
	if(controls.length != 7) {
		alert("Malformed controls query\nExpected length of 7, recieved length of " + controls.length)
	} else {
		var inputAssignments = {
			shiftLeft: [eval("map." + controls[0])],
			shiftRight: [eval("map." + controls[1])],
			softDrop: [eval("map." + controls[2])],
			rotateLeft: [eval("map." + controls[3])],
			rotateRight: [eval("map." + controls[4])],
			swap: [eval("map." + controls[5])],
			hardDrop: [eval("map." + controls[6])]
		}
		var autoRepeatConfig = 50;
		var thresholdConfig = 200;
	}
}

/*
REFERENCE SHEET
If you don't know what this is, refer to the readme.pdf

tab
shift
ctrl
alt
pause
capslock
space
pageup
pagedown
end
home
left
up
right
down
insert
delete
leftwindowkey
rightwindowkey
selectkey
multiply
add
subtract
decimalpoint
divide
numlock
scrollock
semicolon
equalsign
comma
dash
period
forwardslash
graveaccent
openbracket
backslash
closebracket
singlequote
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z

*/

/*
DEFAULT CONTROLS

var inputAssignments = {
	shiftLeft: ["left"],
	shiftRight: ["right"],
	softDrop: ["down"],
	rotateLeft: ["z"],
	rotateRight: ["x", "up"],
	swap: ["shift", "c"],
	hardDrop: ["space"]
}

var autoRepeatConfig = 50;
var thresholdConfig = 200;

*/
let url = '127.0.0.1:8000/posts';
let postData = { userId: 1, title: 'p5 Clicked!', body: 'p5.js is very cool.' };

var r;
var g;
var b;


function setup () {
	//var cnv = createCanvas(windowWidth, windowHeight);
	var cnv = createCanvas(400, 400);
	cnv.style('display', 'block');

	r = 100;
	g = 100;
	b = 100;

}

function draw () {
	background(r, g, b);

}

var postResult;

function mousePressed () {
	if(mouseButton == 'left') {
		// httpPost(url, 'json', postData)
        // .then(response => postRespones(response)); 
	}
}

function postResponse(res) {
    console.log(res);
}

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
// }

//var imgCount = 0
// var cnvName = "imgStart";

function keyTyped () {
    if (key == 's') {

		saveImg();
    }
	if (key == 'r') {

		r+= 10;
    }
	if (key == 'g') {

		g+= 10;
    }
	if (key == 'b') {

		b+= 10;
    }
}

function saveImg () {

	// cnvName = "userIMG" + imgCount;
	// document.getElementById('defaultCanvas0').setAttribute('id', cnvName);

	// var cnv = document.getElementById(cnvName);
	var cnv = document.getElementById('defaultCanvas0');
	var img = cnv.toDataURL();
	console.log('saved file?');
	httpPost(url, 'png', img);

	// document.getElementById(cnvName).setAttribute('id', 'defaultCanvas0');
	// imgCount++;
}
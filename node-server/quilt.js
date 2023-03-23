var sqaureSzize;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    background(128);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(128);
    
}


// function getData(callback) {
//     fetch('http://127.0.0.1:8000/databse.json', {mode : 'no-cors'})
//     .then(response => response.json())
//     .then(result => callback(result));
// }

let squares = [
    {"url":"imgs/1679586125816.png"},
    {"url":"imgs/1679586141304.png"},
    {"url":"imgs/1679586496785.png"},
    {"url":"imgs/1679586570780.png"},
    {"url":"imgs/1679586583668.png"},
    {"url":"imgs/1679586665323.png"},
    {"url":"imgs/1679586125816.png"},
    {"url":"imgs/1679586141304.png"},
    {"url":"imgs/1679586125816.png"},
    {"url":"imgs/1679586496785.png"}
];

let done = [];

// function saveData(data) {
//     let dataKeys = Object.keys(data);
//     for(k of dataKeys) {
//         squares.push(data[k]);
//     }

// }

// getData(saveData);


function buildQuilt() {

    squareSize = 100 / (Math.floor(Math.sqrt(squares.length)));
    var result ='';

    result += '<div>';

    for(var i = 0; i < squares.length; i++) {
        result += '<img src="' + squares[i].url + '"';
        result += 'width="'+ squareSize + '%" height="'+ squareSize + '%">';
    }

    result += '</div>'
    return result;

}

function displayQuilt() {
    var box = document.getElementById('quiltBox');

    box.innerHTML = buildQuilt();

    //console.log(data);
    console.log(squares);
}


window.addEventListener('load', displayQuilt);
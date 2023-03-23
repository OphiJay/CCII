
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


$.getJSON('databse.json', function(data) {
    //do stuff with your data here
    console.log(data);

    let dataKeys = Object.keys(data);
    for(k of dataKeys) {
        squares.push(data[k]);}
});

// $.getJSON( "databse.json", function(data) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });


let squares = [
    {"url":"imgs/1679589917623.png"},
    {"url":"imgs/1679589932774.png"},
    {"url":"imgs/1679589943099.png"},
    {"url":"imgs/1679589949727.png"},
    {"url":"imgs/1679589955739.png"},
    {"url":"imgs/1679589983085.png"},
    {"url":"imgs/1679590011650.png"},
    {"url":"imgs/1679590154372.png"},
    {"url":"imgs/1679590170110.png"},
    {"url":"imgs/1679590189745.png"}

    // data as it will come from json ...
    // {
    // "0":{"url":"imgs/1679589917623.png"},
    // "1":{"url":"imgs/1679589932774.png"},
    // "2":{"url":"imgs/1679589943099.png"},
    // "3":{"url":"imgs/1679589949727.png"},
    // "4":{"url":"imgs/1679589955739.png"},
    // "5":{"url":"imgs/1679589983085.png"},
    // "6":{"url":"imgs/1679590011650.png"},
    // "7":{"url":"imgs/1679590154372.png"},
    // "8":{"url":"imgs/1679590170110.png"},
    // "9":{"url":"imgs/1679590189745.png"}
    //}   
];


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
    var box = document.getElementById('quiltBox'); // can change to jQuery later

    box.innerHTML = buildQuilt();

    //console.log(data);
    console.log(squares);
}


window.addEventListener('load', displayQuilt);




// function getData(callback) {
//     fetch('http://127.0.0.1:8000/databse.json', {mode : 'no-cors'})
//     .then(response => response.json())
//     .then(result => callback(result));
// }

// function saveData(data) {
//     let dataKeys = Object.keys(data);
//     for(k of dataKeys) {
//         squares.push(data[k]);
//     }

// }

// getData(saveData);
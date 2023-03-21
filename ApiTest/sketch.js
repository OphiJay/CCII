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

///////////////////////////////////////////////////////////////

function getData(callback) {
    fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
    .then(response => response.json())
    .then(result => callback(result));
}

let ghibli = [];

function saveData(data) { 
    let dataKeys = Object.keys(data);
    for(k of dataKeys) {
        ghibli.push(data[k]);
    }  
}

getData(saveData);

function Ghibli(arr) {
    this.films = arr[0];
    this.people = arr[1];
    this.locations = arr[2];
    this.species = arr[3];
    this.vehicles = arr[4];
}


// function listFilms() {
//     var result ='';
//     for(var i = 0; i < movies[0].length; i++) {
//         result += '<p class="movieTitle">' + movies[0][i].title + '</p>';
//     }
//     return result;
// }

// function listPeople() {
//     var result ='';
//     for(var i = 0; i < movies[1].length; i++) {
//         result += '<p class="movieTitle">' + movies[1][i].name + '</p>';
//     }
//     return result;
// }

// function printFilms() {
//     var box = document.getElementById('filmBox');

//     box.innerHTML = listFilms();
// }

// function printPeople() {
//     var box = document.getElementById('peopleBox');

//     box.innerHTML = listPeople();
// }

function printData(){
    console.log("printy print print");
}

window.addEventListener('load', printData);






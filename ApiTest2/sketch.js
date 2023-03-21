function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    background(39, 196, 245);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(39, 196, 245);
}

///////////////////////////////////////////////////////////////

function getData(callback) {
    fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
    .then(response => response.json())
    .then(result => callback(result));
}

let ghibliKeys = [];
let ghibliData = [];

function saveData(data) { 
    let dataKeys = Object.keys(data);
    for(k of dataKeys) {
        ghibliKeys.push(k);
    }  
    for(k of dataKeys) {
        ghibliData.push(data[k]);
    } 

    newGhibli = new Ghibli(ghibliData);
    console.log(newGhibli);
    
}

getData(saveData);


function Ghibli(arr) {
    this.films = arr[0];
    this.people = arr[1];
    this.locations = arr[2];
    this.species = arr[3];
    this.vehicles = arr[4];
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function getPoints() {
    
}

// function printFilms () {
//     var box = document.getElementById("filmBox");
//     var result = "";

//     box.innerHTML = result;

//     for(let i = 0; i < newGhibli.films.length; i++)
//     {
//         // console.log(newGhibli.films[i].title);
//         // console.log(newGhibli.films[i].release_date);

//         result += '<h3>' + newGhibli.films[i].title + '</h3>';
//         result += '<p>' + newGhibli.films[i].release_date + '</p>';

//         // result += '<img src="' + newGhibli[i].image +'"'

//     }
// }

// function displayFilm () {
//     var box = document.getElementById("filmBox");
//     var result = "";

//     result += '<img src="' + newGhibli[i].image +'"'


//     box.innerHTML = result;
// }


function printData(){
    console.log("printy print print");
    printFilms();
}

window.addEventListener('load', printData);






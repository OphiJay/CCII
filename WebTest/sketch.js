function setup() {
    
    // var box = document.getElementById('sketchBox');

    var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
    background(128);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    var box = document.getElementById('sketchBox');
    background(128);
}



function getMovieData(callback) {
    fetch('https://raw.githubusercontent.com/sxywu/filmflowers/master/movies.json')
    .then(response => response.json())
    .then(result => callback(result));
}

let movies =[];

function saveData(data) {
    let dataKeys = Object.keys(data);
    for(k of dataKeys) {
        movies.push(data[k]);
    }

}

getMovieData(saveData);

function listMovies() {
    var result ='';
    for(var i = 0; i < movies.length; i++) {
        result += '<p class="movieTitle">' + movies[i].Title + '</p>';
        result += '<p class="movieIMBDRating">' + movies[i].Year + '</p>';
    }
    return result;

}

function printMovies() {
    var box = document.getElementById('movieBox');

    box.innerHTML = listMovies();
}

window.addEventListener('load', printMovies);






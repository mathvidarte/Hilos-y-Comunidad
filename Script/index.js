//Array for the starting points
var points =[];

function setup () {
    createCanvas(windowWidth, windowHeight);
    background (38);

    //number of points in each row
    var density = 50;
    // distance between each point
    var space = width / density;

    //loop for all the starting points
    for (var x = 0; x < width; x += space) {
        for (var y = 0; y < height; y += space) {
            //vector for each x and y coordinate
            var p = createVector(x, y);
            //ad the vector to the points array
            points.push(p);
        }

    }
}

function draw () {
    noStroke();
    fill(255);

    //for to iterate throught the points
    for (var i = 0; i < points.length; i++) {
        //Circle at the x and y coordinate of each point
        ellipse(points[i].x, points[i].y, 5);
    }

}
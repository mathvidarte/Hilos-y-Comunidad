//Array for the starting points
var points =[];
var mult;

//random color
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

class Balls {
    constructor(posx, posy) {
        this.posx = posx;
        this.posy = posy;

    //number of points in each row
    var density = 70;
    // distance between each point
    var space = width / density;

    //loop for all the starting points
    for (var x = 0; x < width; x += space) {
        for (var y = 0; y < height; y += space) {

            //vector for each x and y coordinate
            var p = createVector(x + random(-10, 10), y + random (-10, 10));

            //add the vector to the points array
            points.push(p);
        }
    }

    r1 = random(0, 255);
    r2 = random(0, 255);
    g1 = random(0, 255);
    g2 = random(0, 255);
    b1 = random(0, 255);
    b2 = random(0, 255);

    shuffle(points, true)

    //Random direction and path
    mult = random(0.002, 0.01);

    }

    pintar() {

        if (frameCount * 2 <= points.length) {
            var max = frameCount * 2;
        } else {
            var max = points.length;
        }

        //for to iterate throught the points
        for (var i = 0; i < max; i++) {
    
            //add color cool
            var r = map(points [i].x, 0, width, r1, r2);
            var g = map(points [i].y, 0, height, g1, g2);
            var b = map(points [i].x, 0, width, b1, b2);

            fill(r,g,b);
    
            //angle at which each points will move
            var angle = map(noise(points[i].x, points [i].y), 0, 1, 0, 720);
            var angle = map(noise(points[i].x * mult, points [i].
                y * mult), 1, 0, 1, 720);
    
            //vector to each point based on the angle
            points[i].add(createVector(cos(angle), sin(angle)));
    
            //Circle at the x and y coordinate of each point
            ellipse(points[i].x, points[i].y, 1);

        }
    }
}

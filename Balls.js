//Array for the starting points
var points =[];
var mult;

class Balls {
    constructor(posx, posy, r1, g1, b1, r2, g2, b2) {
        this.posx = posx;
        this.posy = posy;
        this.r1 = r1;
        this.g1 = g1;
        this.b1 = b1;
        this.r2 = r2;
        this.g2 = g2;
        this.b2 = b2;

    //number of points in each row
    var density = 50;
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

    shuffle(points, true)

    //Random direction and path
    mult = random(0.002, 0.01);

    }

    pintar() {

         
        
        if (frameCount * 5 <= points.length) {
            var max = frameCount * 5;
        } else {
            var max = points.length;
        }

        //for to iterate throught the points
        for (var i = 0; i < max; i++) {
    
            //add color cool
            var r = map(points [i].x, 0, this.posx, this.r1, this.r2);
            var g = map(points [i].y, 0, this.posy, this.g1, this.g2);
            var b = map(points [i].x, 0, this.posx, this.b1, this.b2);

            //alpha value
            var alpha = map(dist(this.posx, this.posy, points[i].x, points[i].y),
            0, 350, 255, 0)
    
            fill(r,g,b, alpha);
    
            //angle at which each points will move
            var angle = map(noise(points[i].x * mult, 
                points [i].y * mult),
                0, 1, 0, 720);
    
            //vector to each point based on the angle
            points[i].add(createVector(cos(angle), sin(angle)));
    
            //limited in a circle
            if (dist(this.posx, this.posy, points[i].x, points[i].y) < 100) {
    
                //Circle at the x and y coordinate of each point
                ellipse(points[i].x, points[i].y, 1.5);
            }
        }

    }
}

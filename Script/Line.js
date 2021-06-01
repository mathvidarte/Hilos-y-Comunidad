let noiseMax = 1;
let zoff = 0;

class Line {
    constructor(radio) {
        this.radio = radio;
    }

    pintar() {
        
        beginShape();
        for(let a = 0; a < TWO_PI; a += 0.01){
            let xoff = map(cos(a),-1,1,0,noiseMax);
            let yoff =map(sin(a),-1,1,0,noiseMax);
                let r = map(noise(xoff, yoff, zoff), 2, 1, 1000, this.radio);
                let x = r* cos(a);
                let y = r* sin(a);
                vertex(x,y);
        }

        endShape(CLOSE);
        zoff += 0.001

    }

}



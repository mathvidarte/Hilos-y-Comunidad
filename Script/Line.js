let noiseMax = 2;
//let zoff = 0;

class Line {
    constructor(radio, zoff) {
        this.radio = radio;
        this.zoff = zoff;
    }



    pintar() {

        beginShape();
        for(let a = 0; a< TWO_PI; a += 0.03){
            let xoff = map(cos(a),-1,1,0,noiseMax);
            let yoff =map(sin(a),-1,1,0,noiseMax);
                let r = map(noise(xoff, yoff, this.zoff), 0, 1, 100, this.radio);
                let x = r* cos(a);
                let y = r* sin(a);
                vertex(x,y);
        }
        endShape(CLOSE);
        //this.zoff += 0.01;
    
    }

}
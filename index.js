const points = [];
const hull = [];


let leftMost;
let currentVertex;
let index = 0;
let nextVertex;
let nextIndex = -1;
let color = [];

const buffer = 100;


function setup() {
    createCanvas(700, 700);


    while (1) {
        let r = 300;
        let a = random(width) - r;
        let b = random(height) - r;
        if (a * a + b * b <= r * r) {
            points.push(createVector(a + r, b + r));
            color.push([random(30, 255), random(30, 255), random(30, 255)])
            if (points.length == 100) {
                break;
            }
        }
    }

    points.sort((a, b) => a.x - b.x)
    leftMost = points[0];
    currentVertex = leftMost;
    hull.push(currentVertex);
    nextVertex = points[1];
    index = 2;
}

function draw() {
    background(0);
    for (let i = 0; i < points.length; i++) {
        stroke(color[i][0], color[i][1], color[i][2]);
        strokeWeight(8);
        point(points[i].x, points[i].y);
    }

    fill(0, 0, 0, 5);
    beginShape();


    let c = random(255);
    for (let p of hull) {
        stroke(127, 0, c);
        vertex(p.x, p.y);

    }
    endShape(CLOSE);

    stroke(127, 0, c);
    strokeWeight(20);
    point(leftMost.x, leftMost.y);



    stroke(127, 0, c);
    strokeWeight(20);
    point(currentVertex.x, currentVertex.y);

    stroke(255, 0, 0);
    strokeWeight(20);

    line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);


    let checking = points[index];
    stroke(127, 0, c);
    strokeWeight(30);
    point(checking.x, checking.y)
    strokeWeight(20)
    stroke(0, 255, c);

    strokeWeight(5);
    line(currentVertex.x, currentVertex.y, checking.x, checking.y);


    const a = p5.Vector.sub(nextVertex, currentVertex);
    const b = p5.Vector.sub(checking, currentVertex);
    // cross product
    const cross = a.cross(b);
    if (cross.z < 0) {
        nextVertex = checking;
        nextIndex = index;
    }
    index = index + 1;

    if (index === points.length) {
        if (nextVertex === leftMost) {
            console.log('done');
            noLoop();
        } else {
            hull.push(nextVertex);
            currentVertex = nextVertex
            index = 0;
            nextVertex = leftMost;
        }
    }

}
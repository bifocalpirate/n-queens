/* configs */
var CANVAS_SIZE = 500;
var CELL_WIDTH = 20;
var ROW_COUNT = CANVAS_SIZE / CELL_WIDTH;
var FRAME_RATE = 60;

var grid = [];
var solved = false;
var pause = true;

/* configs */
function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    for (var i = 0; i < ROW_COUNT; i++) {
        for (var j = 0; j < ROW_COUNT; j++) {
            grid.push(new Cell(i, j));
        }
    }
    noLoop();
    frameRate(FRAME_RATE);                                          
    var j = new NQueensSolver(ROW_COUNT);   
    if (j.solve(0))
    {
        console.log('Solution found.');
        j.printGrid();
    }
    else{
        console.log('No solution.');        
    }
}

function keyPressed() {
    pause = !pause;
}

function draw() {
    background('white');  
    for (var z = 0; z < grid.length; z++) {
        grid[z].show();
    }
    noFill();
    strokeWeight(3);
    stroke('blue');
    rect(0, 0, CANVAS_SIZE-1, CANVAS_SIZE-1);
}
/* configs */
var CANVAS_SIZE = 600;
var CELL_WIDTH = 40;
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
    //frameRate(FRAME_RATE);                                          
    noLoop();
    var j = new NQueensSolver(ROW_COUNT,grid);   
    if (j.solve(0))
    {
        console.log('Solution found.');
        console.log(j.getGridText());
        console.log(grid);
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
    stroke('#333399');
    rect(0, 0, CANVAS_SIZE-1, CANVAS_SIZE-1);
}
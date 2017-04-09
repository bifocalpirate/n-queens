/* configs */
var CANVAS_SIZE = 600;
var ROW_COUNT = 15;
var CELL_WIDTH = 20;
var FRAME_RATE = 60;

var grid = [];
var controlPanel = null;

function workSetup(){

    grid = [];
    createCanvas(CANVAS_SIZE,CANVAS_SIZE);
    CELL_WIDTH = CANVAS_SIZE/ROW_COUNT;
    
    for (var i = 0; i < ROW_COUNT; i++) {
        for (var j = 0; j < ROW_COUNT; j++) {
            grid.push(new Cell(i, j));
        }
    }    
    var j = new NQueensSolver(ROW_COUNT,grid);   
    if (j.solve(0))
    {
        console.log('Solution found.');
        console.log(j.getGridText());        
    }
    else{
        console.log('No solution.');        
    }
    redraw();
}
function setup() {
    createCanvas(10, 10);
    controlPanel = QuickSettings.create(CANVAS_SIZE+10,20,"Options");
    controlPanel.addDropDown("BoardSize",[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);

    controlPanel.addButton("Solve",()=>{
        applySettings();
    });
    workSetup();                                   
    controlPanel.setValue("BoardSize",11);
    noLoop();        
}
function applySettings(){    
    var newBoardSize = controlPanel.getValue("BoardSize").value;
    ROW_COUNT = newBoardSize;    
    workSetup();    
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
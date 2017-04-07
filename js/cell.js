var Cell = function(row, col,colourMap) {

    this.Column = col;
    this.Row = row;
    this.value = false;            
    this.colourMap = colourMap;
    if (!colourMap){
            this.colourMap = {
                true: 'red',
                false: '#ffffe6'
            }     
    }

    this.setValue = function(t) {
        this.value = t;
    }
    this.getValue = function(){
        return this.value;
    }

    this.show = function() {
        strokeWeight(2);        
        fill(this.getCellColour());
        stroke('#333399');
        rect(col * CELL_WIDTH, row * CELL_WIDTH, CELL_WIDTH+1, CELL_WIDTH+1);                   
    }    

    this.getCellColour = function() {         
            return this.colourMap[this.getValue()]?this.colourMap[this.getValue()]:'red';                
    }
}
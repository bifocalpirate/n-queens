class NQueensSolver{
    constructor(n){
        this.n = n;
        this.grid = [];
        for(var i=0;i < n*n; i++){
            this.grid.push(false);
        }        
    }
    setQueenAt(row,col,on){      
        this.grid[this.getIndex(row,col)]=on;
    }
    grid(){
            return this.grid;
    }
    printGrid(){
        //console.log(this.grid);
        var i=0;        
        var r = "";        
        this.grid.forEach((c)=>{
            r = r + (c?"@":"x");
            if (i <this.n-1)                            
                i++;            
            else{                      
                r += "\n";
                i=0; 
            }           
        });
        console.log(r);
        return r;
    }
   
    getIndex(row, col) {
        if (row < 0 || col < 0 || row > this.n - 1 || col > this.n - 1) {            
            return -1;
        }
        return col + row * this.n;
    }
    getQueenRow(col){
        for(var t=0; t < this.n; t++)
        {
            if (this.grid[this.getIndex(t,col)])
                return t;
        }
        return -1;
    }
    solve(j){
        
        if (this.n==j) //check on column (n)
        {                        
            return true;
        }
        else{                            
                for(var row=0; row < this.n; row++){                         
                    if (this.isValidPosition(row,j))
                    {
                        this.setQueenAt(row,j,true);                                            
                        //this.printGrid();                        
                        if (this.solve(j+1))                        
                            return true;                        
                        this.setQueenAt(row,j,false);
                    }                          
                }                
        }
        return false;
    }
    isValidPosition(row,col){                
          for(var d=0; d < this.n; d++){ //check row OK                                                                   

              if (this.grid[this.getIndex(row,d)]) //check left/right                               
                 return false; //OK
              
              ///////////////////////////////////////////////////////////////////////
              if (this.grid[this.getIndex(d,col)]) //check up down              
                 return false; //OK              
              
              ///////////////////////////////////////////////////////////////////////
            if (this.grid[this.getIndex(row-d,col-d)] || this.grid[this.getIndex(row-d,col+d)])            
                return false; //OK
            
            if (this.grid[this.getIndex(row+d,col-d)] || this.grid[this.getIndex(row+d,col+d)])
                return false; //OK
              ///////////////////////////////////////////////////////////////////////
          }                             
        return true;
    }
}
class NQueensSolver{
    constructor(n,g){
        this.n = n;
        if (!g)        
            {
                console.error('Must pass in a grid.');
                return;
            }
        this.grid = g;                                       
    }

    setQueenAt(row,col,on){      
        this.grid[this.getIndex(row,col)].setValue(on);
    }   

    getGridText(){        
        var i=0;        
        var r = "";        
        this.grid.forEach((c)=>{
            r = r + (c.getValue()?"@":"x");
            if (i <this.n-1)                            
                i++;            
            else{                      
                r += "\n";
                i=0; 
            }           
        });        
        return r;
    }
   
    getIndex(row, col) {
        if (row < 0 || col < 0 || row > this.n - 1 || col > this.n - 1) {            
            return -1;
        }
        return col + row * this.n;
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
                        if (this.solve(j+1))                        
                            return true;                        
                        this.setQueenAt(row,j,false);//roll back previous check                        

                    }                          
                }                
        }
        return false;
    }
    isValidPosition(row,col){                
          for(var d=0; d < this.n; d++){ //check row OK                                                                   

              if (this.grid[this.getIndex(row,d)].getValue()) //check left/right                               
                 return false; //OK
              
              ///////////////////////////////////////////////////////////////////////
              if (this.grid[this.getIndex(d,col)].getValue()) //check up down              
                 return false; //OK              
              
              ///////////////////////////////////////////////////////////////////////
            
            if ( (row-d>=0 && col-d>=0 && this.grid[this.getIndex(row-d,col-d)].getValue()) || (row-d>=0 && col+d<this.n && this.grid[this.getIndex(row-d,col+d)].getValue()))
                    return false; //OK
            
                if ((row+d<this.n && col-d>=0&& this.grid[this.getIndex(row+d,col-d)].getValue()) || (row+d<this.n && col+d<this.n && this.grid[this.getIndex(row+d,col+d)].getValue()))
                  return false; //OK
              ///////////////////////////////////////////////////////////////////////
          }                             
        return true;
    }
}
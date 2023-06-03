https://stanford.edu/~cpiech/karel/ide.html

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    move4times();
    turnLeft();
    move4times();
    
 }
 
   function move4times(){
    move();
    move();
    move();
    move();
    
   }



   /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    putBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    
 }
 
   function diagonalMoveAndBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
   }
 

   

   /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    moveBeeper();
    
 }
 
   function moveBeeper(){
    putBeeper();
    turnLeft();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnRight();
    move();
    turnRight();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    turnLeft();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnRight();
    move();
    turnRight();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnLeft();
    move();
    turnLeft();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
   }
 
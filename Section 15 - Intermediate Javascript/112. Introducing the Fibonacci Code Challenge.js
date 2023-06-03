function fibonacciGenerator (n) {
    var a=0;
    var b=1;
    var nextNum;
    var arr = [];
     if(n == 1){
        arr.push(0);
     }
     else{
       for(var i = 0; i < n; i++){
           arr.push(a);
           nextNum = a + b;
           a = b;
           b = nextNum;
           
       }
         
     }
     return arr;
    
    }
    
    
    console.log(fibonacciGenerator(8));
let count = 99;

while(count >= 1){
    console.log(count + " bottels of beer on the wall, " + count + " bottels of beer." );
    console.log("Take one down and pass it around. " + (count-1)  + " bottles of beer on the wall."); 
    console.log("\n");
    count--;
}

if(count == 0){
    console.log("No more bottels of beer on the wall, No bottels of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall."); 
}
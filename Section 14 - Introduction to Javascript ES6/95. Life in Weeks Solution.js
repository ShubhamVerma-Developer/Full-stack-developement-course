function lifeInWeek(age){
    var yearRemaining = (90-age);
    var day = yearRemaining * 365;
    var week = yearRemaining * 52;
    var month = yearRemaining * 12;
    console.log("You have " + day + " Days " + week +" Weeks, and " + month + " months left.");

}


lifeInWeek(21);










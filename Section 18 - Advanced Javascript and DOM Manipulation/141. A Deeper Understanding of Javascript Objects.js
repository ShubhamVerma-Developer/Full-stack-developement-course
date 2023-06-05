
function houseKeeper(yearsOfexperience, name, age, salary){
    this.yearsOfexperience = yearsOfexperience;
    
    this.name = name;
    this.age = age;
    this.salary = salary;
}


var houseKeeper1 = new houseKeeper(10, "vinita", 25, 1400000);

console.log(houseKeeper1.name);
console.log(houseKeeper1);
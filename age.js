//reference
//module ch2, lesson 2
//collecting user's age
let age = 19;

//checking if the user's age belong to the category using if else statement
if (age <=5){
    console.log("Toddler");
}else if (age >=6 && age <= 12){
    console.log("Child");
}else if (age >= 13 && age <= 19){
    console.log("Teenager");
}else if (age >= 20 && age <= 35){
    console.log("Young Adult");
}else if (age >= 36 && age <= 60){
    console.log("Middle-Age");
}else{
    console.log("Senior");
}
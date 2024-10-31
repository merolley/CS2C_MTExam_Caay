/*
references
https://tms-outsource.com/blog/posts/javascript-while-loop/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
*/
//creating a variable that will hold my fav color
let colors = ["gray", "green", "blue"];

//the Loop 'til it has has 8 colors
while (colors.length < 8) {  //8 is my desired length so lets put that
    let adColor = prompt("Add your favorite color:");
    colors.push(adColor); //then it will push my added colors until it reach 8
    console.log("These are your colors:", colors); //and it will display the colors with my imput colors
}

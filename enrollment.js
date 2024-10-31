/*
reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
https://youtu.be/uA4mSFBIugZA?si=O6jDDzwjj37T6Wh3
https://youtu.be/PgUXiprlg1k?si=ys_wpH_UN6j3amv1nmk
*/
//creating the array
let DSA = [];
let PL = [];
let Networks = [];
//then the loop for the choices
while (true) {
    let subChoice = prompt("Select a subject: (A) DSA, (B) PL, (C) Networks, (D) Exit");
    if(subChoice === "D") { //exit if the user choose d
        console.log("Final enrollment lists:"); //printing the results
        console.log("DSA:", DSA);
        console.log("PL:", PL);
        console.log("Networks:", Networks);
        break;
    }
    //choices for the subject
    let selArray; 
    let subName;
    if(subChoice === "A") {
        selArray = DSA;
        subName = "DSA";
    }else if(subChoice === "B") {
        selArray = PL;
        subName = "PL";
    }else if (subChoice === "C") {
        selArray = Networks;
        subName = "Networks";
    }else {
        console.log("Not in the option");
        continue;
    }
    //prompt for operation choice
    let operation = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject");   
    //enrolling
    if(operation === "A") {
        let stuName = prompt("Enter the student's name to enroll:");
        selArray.push(stuName);
        console.log(`Enrolled ${stuName} in ${subName}`);
    }else if(operation === "B") { //unenroll
        if(selArray.length === 0) {
            console.log(`No students enrolled in ${subName}`);
        } else{
            console.log(`Enrolled students in ${subName}: ${selArray.join(", ")}`);
            let unrollName = prompt("Enter the student's name to unenroll:");
            let index = selArray.indexOf(unrollName);
            if(index !== -1) {
                selArray.splice(index, 1);
                console.log(`${unrollName} has been unenrolled from ${subName}`);
            } else{
                console.log(`${unrollName} is not found in ${subName}`);
            }
        }
    }  
    else if(operation === "C") { //othr subject
        continue;
    }       
    else{
        console.log("Not in the option"); //invalid
    }
}

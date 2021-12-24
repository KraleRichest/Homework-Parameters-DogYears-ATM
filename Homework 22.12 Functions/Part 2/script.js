
function yearsDogToHumans (parsedInputDogYears) {
    if (!isNaN(parsedInputDogYears) && parsedInputDogYears > 0 && parsedInputDogYears < 20) {
    let yourDogHumanYears = parsedInputDogYears * 7;
    return yourDogHumanYears;
    } 
}

function yearsHumanToDogs (parsedInputHumanYears) {
    if (!isNaN(parsedInputHumanYears) && parsedInputHumanYears > 0 && parsedInputHumanYears < 120) {
    let yourHumanDogYears = parsedInputHumanYears / 7;
    return yourHumanDogYears;
    } 
}


let inputDogYears = prompt("How old is youre dog?");
let parsedInputDogYears = parseInt(inputDogYears);

let inputHumanYears = prompt("How old are you?");
let parsedInputHumanYears = parseInt(inputHumanYears);


function printMessage(parsedInputDogYears, parsedInputHumanYears){
    if (!isNaN(parsedInputDogYears) && parsedInputDogYears > 0 && parsedInputDogYears < 20 && !isNaN(parsedInputHumanYears) && parsedInputHumanYears > 0 && parsedInputHumanYears < 120){
        console.log(("If youre dog was a human, it will be " + yearsDogToHumans(parsedInputDogYears) + " years old , and if you were a dog you are going to be " + yearsHumanToDogs(parsedInputHumanYears) + " years old!"));
    } else {
        console.log("Enter valid numbers")
    }
}


printMessage(parsedInputDogYears, parsedInputHumanYears);


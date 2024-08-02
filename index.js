const inquirer = require("inquirer");
const fs = require("fs");
const { questions } = require("./lib/questions");
const Shape = require("./lib/Shape");
const {Circle} = require("./lib/Shape");
const {Square} = require("./lib/Shape");
const {Triangle} = require("./lib/Shape");
const {colorNameCodes} = require("./lib/colorNames");


function init() {

    askQuestions();

}

async function askQuestions() {
    const responses = await inquirer.prompt(questions);

    const respTextColor = capitalizeFirstLetter(responses.textColor);
    const respShapeColor = capitalizeFirstLetter(responses.shapeColor);


    let userLogo;


    if(validateColor(respTextColor) && validateColor(respShapeColor) && validateTextLength(responses.text)) {
        if (responses.shape == "Circle"){
            userLogo = new Circle(responses.text, respTextColor, respShapeColor);
        } else if (responses.shape == "Square"){
            userLogo = new Square(responses.text, respTextColor, respShapeColor);
        } else {
            userLogo = new Triangle(responses.text, respTextColor, respShapeColor);
        }
        createSVG(userLogo.render());
    } else {
        askQuestions();
    }

}


function createSVG(svgString) {

    fs.writeFile("logo.svg", svgString, (err) => err ? console.log(err): console.log("SVG written successfully!"));


}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateColor(color) {

    let Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

    if (Reg_Exp.test(color) || colorNameCodes.includes(color)) {
        return true;
    } else{
        console.log("Please enter a valid color name or hex code");
        return false;
    }
}

function validateTextLength(string) {
    if (string.length <= 3){
        return true;
    } else {
        console.log("Please enter 3 characters or less for your logo text.");
        return false;
    }
}


init();



const questions = [
    {
        type: "input",
        message: "Please enter your text for the logo. (no more than 3 characters)",
        name: "text"
    },
    {
        type: "input",
        message: "What color do you want the text to be?",
        name: "textColor"
    },
    {
        type: "list",
        message: "What shape do you want the logo to be?",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        message: "What color do you want the shape to be?",
        name: "shapeColor"
    },
]


module.exports = {
    questions
}
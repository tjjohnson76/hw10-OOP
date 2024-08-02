const {Circle, Square, Triangle} = require("./Shape");


describe("Testing the different shape classes", () => {

    describe("Testing the Circle class", () => {
        it("should create a circle object and be able to render the svg string", () =>{
            const testCircle = new Circle("TST", "White", "Blue");
            const result = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="Blue"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">TST</text>

</svg>                
`
            const renderResult = testCircle.render();
            expect(renderResult).toEqual(result);    
        })
    })



    describe("Testing the Circle class", () => {
        it("should create a circle object and be able to render the svg string", () =>{
            const testSquare = new Square("TST", "White", "Blue");
            const result = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="160" height="160" x="70" y="20" fill="Blue"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">TST</text>

</svg>                
`
            const renderResult = testSquare.render();
            expect(renderResult).toEqual(result);    
        })
    })



    describe("Testing the Circle class", () => {
        it("should create a circle object and be able to render the svg string", () =>{
            const testTriangle = new Triangle("TST", "White", "Blue");
            const result = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="Blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">TST</text>

</svg>                
`
            const renderResult = testTriangle.render();
            expect(renderResult).toEqual(result);    
        })
    })








});
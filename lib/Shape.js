


class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)

    }


    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>                
`
    }


}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)

    }

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="160" height="160" x="70" y="20" fill="${this.shapeColor}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>                
`
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)

    }

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>                
`
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}
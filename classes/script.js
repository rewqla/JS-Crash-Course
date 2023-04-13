function Task1() {
    class CssClass {
        constructor(className) {
            this.className = className;
            this.styles = [];
        }

        setStyle(style, value) {
            this.styles[style] = value;
        }

        removeStyle(style) {
            delete this.styles[style];
        }

        getCSS() {
            let css = `.${this.className} {\n`;
            for (const [style, value] of Object.entries(this.styles)) {
                css += `  ${style}: ${value};\n`;
            }
            css += '}';
            return css;
        }
    }

    let css = new CssClass('my-class');
    css.setStyle('background-color', 'red');
    css.setStyle('color', 'white');
    console.log(css.getCSS())

    css.removeStyle('background-color');
    console.log(css.getCSS());
}
// Task1();

function Task2() {
    class Button {
        constructor(width, height, text) {
            this.width = width;
            this.height = height;
            this.text = text;
        }

        showBtn() {
            document.write(`<button style="width: ${this.width}px; height: ${this.height}px">${this.text}</button>`);
        }
    }

    class BootstrapButton extends Button {
        constructor(width, height, text, color) {
            super(width, height, text);
            this.color = color;
        }

        showBtn() {
            document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color:${this.color}">${this.text}</button>`);
            // document.write(`<button class="btn btn-${this.color}" style="width: ${this.width}px; height: ${this.height}px">${this.text}</button>`);
        }
    }

    const btn = new Button(100, 50, 'Common button');
    btn.showBtn();

    const bootstrapBtn = new BootstrapButton(100, 50, 'Super cool button', 'green');
    bootstrapBtn.showBtn();
}
Task2();

function Task3() {

}
// Task3();

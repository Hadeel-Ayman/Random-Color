
/*start defintion the varibles*/
const btn = document.querySelector("#btn");
const divColor = document.querySelector("#divColor");
const ColorInput = document.querySelector("#ColorInput");
const typeColor = document.querySelector("#typeColor");
/*end  defintion the varibles*/

let Colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/*start changeColor function */
const changeColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * Colors.length);
        color += Colors[index];
    }
    ColorInput.value = color;
    document.getElementById("divColor").style.backgroundColor = color;
};
/* end changeInputColor function */

/*start changeInputColor function */
const changeInputColor = () => {
    let color = "#";
    const ColorInput1 = ColorInput.value;
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * Colors.length);
        color += Colors[index];
    }
    document.getElementById("divColor").style.backgroundColor = ColorInput1;
}

/* end changeInputColor function */

/* start changeColorDiv function */
const changeColorDiv = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * Colors.length);
        color += Colors[index];
    }
    document.getElementById("divColor").style.backgroundColor = color;
};
const ColorInput1 = ColorInput.value;
/* end changeColorDiv function */



/* start Events */
btn.addEventListener("click", changeColor);
ColorInput.addEventListener("keyup", changeInputColor);
divColor.addEventListener("mousemove", changeColorDiv);
/* end Events */


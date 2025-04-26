const button = document.getElementById("button");

const body = document.body;

function changeColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', () => {
    const newColor = changeColor(); 

    body.style.backgroundColor = newColor;

    console.log("Background color changed to:", newColor);
});
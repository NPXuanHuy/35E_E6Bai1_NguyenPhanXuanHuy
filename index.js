let arrColor = ['red','green', 'blue', 'orange', 'pink', 'black', 'yellow', 'silver'];

let renderButtonString = () => {
    let content = '';
    for (let index = 0; index < arrColor.length; index++) {
        let color = arrColor[index];
        content += `
            <button class="btn text-light mx-2" style="background-color: ${color};" onclick="changeColor('${color}')">${color}</button>
        
        `;
    }
    document.getElementById('colors').innerHTML = content;
}

window.changeColor = (color) => {
    document.getElementById('home').style.color = color;
}


renderButtonString();






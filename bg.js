const body = document.querySelector("body");

const IMG_num = 4


function paintImg(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add('bgImage')
    body.appendChild(image)
}

function genRandom(){
    const num = Math.floor(Math.random()*IMG_num);
    return num; 
}

function init(){
    const randomNum = genRandom();
    paintImg(randomNum)
}

init();
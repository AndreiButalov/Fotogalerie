let imageGe = ['./img/de/de1.jpg', './img/de/de2.jpg', './img/de/de3.jpg', './img/de/de4.jpg', './img/de/de5.jpg', './img/de/de6.jpg', './img/de/de7.jpg', './img/de/de8.jpg', './img/de/de9.jpg', ];

var count = 0;

function render() {

    let fotogallerieGe = document.getElementById('idFotoGe');

    fotogallerieGe.innerHTML = '';
    for (let i = 0; i < imageGe.length; i++) {
        fotogallerieGe.innerHTML += /*html*/`
            <img src="${imageGe[i]}" alt="Deutschland" onclick="showImage(${i})">
    `;
    }     
}

function generateImage(i) {
    return `
    <div class="showFoto">
        <div class="control">  
            <div class="button_close">
                <button class="close" onclick="displayNone()">X</button>
            </div>              
            <div class="arrows">
                <button class="back" onclick="backImage(${i})"><</button>
                <button class="next" onclick="nextImage(${i})">></button>
            </div>
            <div class="img_f">
                <img id="meinImage" src="${imageGe[i]}" alt="">
            </div>
        </div>
    </div>`
}

function showImage(i) {  

    let body = document.getElementById('body');
    document.getElementById('id').classList.add('d-none');

    body.innerHTML += generateImage(i);
        
    }


function nextImage(i) {
  
    if (i == (imageGe.length - 1)) {
        i = 0;
        showImage(i)
    }else {
        i++;
        showImage(i)
    }   
}


function backImage(i) {

    if(i == 0) {
        i = imageGe.length-1;
        showImage(i);
    } else {
        i--;
        showImage(i);
    }
}


function displayNone() {
    location.reload();    
}
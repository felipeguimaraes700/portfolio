

function openMenu(){
    document.getElementById('container-menu').style.width='270px';
    document.getElementById('icon-menu').style.display='none';
}
function closeMenu(){
    document.getElementById('container-menu').style.width='0px';
    document.getElementById('icon-menu').style.display='flex';
}



// SLIDER ////////////////////////////////

let count = 1;

setInterval(function(){
    nextCertificate()
}, 8000)

function nextCertificate(){
    count ++;
    if(count > 4){
        count = 1        
    }
    document.getElementById('radio' + count).checked = true;
}

// ZOOM PORTFOLIO ////////////////////////////

let imgPortifolio = document.getElementById('imagem-portfoilio01')
let linkItemPortifolio = document.getElementById('project01')

linkItemPortifolio.addEventListener('mousehover', bigImg())
linkItemPortifolio.addEventListener('mouseleave', smallImg())

function bigImg(){
    imgPortifolio.style.transform = 'scale(1.2)';
}
function smallImg(){
    imgPortifolio.style.transform = 'scale(1)'
}
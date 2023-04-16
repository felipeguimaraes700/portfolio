

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
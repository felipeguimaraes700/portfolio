function openMenu(){
    menuHamburguer = document.getElementById('nav-bar').style.height='100vh'
}
function closeMenu(){
    menuHamburguer = document.getElementById('nav-bar').style.height='0px'
}


// ANIMATION

const cards = document.querySelectorAll('.container-project-iten')

window.addEventListener('scroll', checkBoxes)
    
checkBoxes()

    function checkBoxes(){
        const triggerBottom = window.innerHeight / 5 * 4

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top
            
            if(cardTop < triggerBottom){
                cards.classList.add('show')
            } else{
                cards.classList.remove('show')
            }
        })
    }
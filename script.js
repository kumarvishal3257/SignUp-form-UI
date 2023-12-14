
const button = document.getElementById('btnControl')
const card = document.querySelector('.card')
const thanks = document.querySelector('.thank-you-card')
button.addEventListener('click', () => {
    inputValue()
    
    card.classList.add('hide')
    thanks.classList.add('unhide')
})

const thanksButton = document.querySelector('.thank-you-button')

thanksButton.addEventListener('click', () => {
    thanks.classList.remove('unhide')
    card.classList.remove('hide')
})

function inputValue() {
   var x = document.getElementById("myEmail").value;

   document.getElementById("showText").innerHTML = x;
}



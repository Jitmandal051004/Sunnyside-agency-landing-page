const ham = document.querySelector('.ham');
const openHam = document.querySelector('.openHam');
const navList = document.querySelector('.navList');

ham.addEventListener('click',() => {
    navList.style.display = 'flex';
    ham.style.display = 'none';
    openHam.style.display = 'block';
})

openHam.addEventListener('click',() => {
    navList.style.display = 'none';
    openHam.style.display = 'none';
    ham.style.display = 'block';
})
/*
 Definatation Global vrialbles
*/
let sections = document.querySelectorAll('section');
let list = document.querySelector('.list');
let minue = document.querySelector('.minue-toggle');
let navbar = document.querySelector('.nav-bar');
console.log(navbar)
let signUp = document.querySelector('.sign-up');
console.log(signUp)

//  //  build the nav and Scroll to section on link click with the same function
for (section of sections) {
    let element = document.createElement('li');
    let anchor = document.createElement('a');
    list.appendChild(element);
    element.appendChild(anchor)
    anchor.textContent = section.id;
    anchor.href = `#${section.id}`
}

//Active minue toggle 
//  click on minue toggle to close the list 
minue.addEventListener('click', () => {
    navbar.classList.toggle('nav-bar-open');

    signUp.classList.toggle('singn-up-open')
    console.log('hello')
})

//easy tool to  scrool to top page and scroll to top
const topSpan = document.querySelector('.up')
console.log(topSpan)
window.addEventListener('scroll', () => {
    // when scrollY >= 1500px show your topSpan
    this.scrollY >= 1500 ? topSpan.classList.add('up-show') : topSpan.classList.remove('up-show');

})
// scroll to top when click 
topSpan.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))
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

// slider our project
// git slider imgs, prev, next, pagination
let imgs = Array.from(document.querySelectorAll('.slider-container-imgs img')),
    imgLength = imgs.length,
    prev = document.querySelector('.slider-container-prev'),
    next = document.querySelector('.slider-container-next'),
    pagination = document.querySelector('.slider-pagination');
// create ul list  and  append to pagination
const listPag = document.createElement('ul');
// make loop from imgs to create list element and adding to pagination
for(let i = 1 ;i <= imgLength ;i++){
    const listPagElem = document.createElement('li');
    listPagElem.setAttribute('data-nav',i);
    listPagElem.appendChild(document.createTextNode(i));
    listPag.appendChild(listPagElem)
}
pagination.appendChild(listPag);
// prev and next function 
let  currentImg = 1;
paginationList = Array.from(document.querySelectorAll('.slider-pagination ul li'));
next.addEventListener('click', ()=>{
    if(currentImg == imgLength){
        return  false;
    }else{
        currentImg++;
        checker();
    }
});
prev.addEventListener('click', ()=>{
    if(currentImg == 1){
        return  false;
    }else{
        currentImg--;
        checker();
    }

});
///
console.log(paginationList)
for (let li of paginationList){
    li.addEventListener('click', ()=>{
        currentImg = li.getAttribute('data-nav');
        checker();
    })
}

// function checker for the imgs and pagenation

     
function checker(){
    // clear all active from imgs and pagination list
    clearAll();
    imgs[currentImg - 1].classList.add('active');
    paginationList[currentImg -1].classList.add('active');
    if (currentImg == 1  ){
        prev.classList.add('disabled')
    }else {
        prev.classList.remove('disabled')
    }
    if (currentImg == imgLength  ){
        next.classList.add('disabled')
    }else {
        next.classList.remove('disabled')
    }
}
function clearAll(){
    imgs.forEach((img)=>img.classList.remove('active') )
    paginationList.forEach((li)=>li.classList.remove('active') )
    
}
checker();

// currentImg++;

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const micro = document.getElementById('tabs_micro')
const content_micro = document.querySelectorAll('.content_micro');
const morph = document.getElementById('morph')
const changeClass = el => {
    for(let i = 0;  i < tabs.children.length; i++){

    tabs.children[i].classList.remove('active')};
    el.classList.add('active')
}

tabs.addEventListener('click', e => {
    const currentTab = e.target.dataset.btn; 
    changeClass(e.target);
    morph.classList.remove('active')
    if(currentTab==3){
        morph.classList.add('active');
    }
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currentTab){
            content[i].classList.add('active');
        }
    }
})



const changeClass2 = el2 => {
    for(let i = 0;  i < tabs_micro.children.length; i++){
    tabs_micro.children[i].classList.remove('active')};
    el2.classList.add('active')
}

tabs_micro.addEventListener('click', e2 => {
    const currentTab2 = e2.target.dataset.btn_micro; 
    changeClass2(e2.target);
    for(let i = 0; i < content_micro.length; i++){
        content_micro[i].classList.remove('active');
        
        if(content_micro[i].dataset.content_micro === currentTab2){
            content_micro[i].classList.add('active');
        }
    }
})

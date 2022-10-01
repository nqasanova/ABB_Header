var search = document.querySelector('.search');
var second = document.querySelector('.second');
var remove = document.querySelector('.remove');
var language = document.querySelector('.language');
var dropwdown = document.querySelector('.dropdown')

search.onclick = function(){
    second.classList.toggle('active')
}
remove.onclick = function(){
    second.classList.remove('active')
}

language.onclick = function(){
    dropwdown.classList.toggle('active')
}

var slider_icon = document.querySelector('.slider-icon');
var slider_menu = document.querySelector('.slider-menu')

slider_icon.addEventListener('click',function(){
    slider_menu.classList.add('move')
})

var x_button = document.querySelector('.x-button');
x_button.addEventListener('click',function(){
    slider_menu.classList.remove('move');
})
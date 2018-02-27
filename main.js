var elements = document.querySelectorAll('.courses__list > .courses__item');
var checkbox = document.querySelectorAll(' .checkbox_hidden');

Array.prototype.filter.call(checkbox,function(check)
{
    check.addEventListener('click', function(event){
        console.log(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.courses__item'));
            this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses_hover').classList.toggle("courses_hover--checked");
            this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses__desc').classList.toggle("courses__desc--checked");
            this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.courses__item').classList.add("courses__item--checked");
    }) 
})

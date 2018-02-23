var elements = document.querySelectorAll('.courses__list > .courses__item');
var checkbox = document.querySelectorAll(' .checkbox_hidden');

Array.prototype.filter.call(checkbox,function(check)
{
    check.addEventListener('click', function(event){
        console.log(this.parentNode.parentNode.parentNode);
            this.parentNode.parentNode.parentNode.parentNode.classList.add('courses__item--checked');
    }) 
})

var elements = document.querySelectorAll('.courses__list > .courses__item');
var checkbox = document.querySelectorAll('.checkbox_hidden');
var liChecked = [];
var count = 0;
Array.prototype.filter.call(checkbox,function(check)
{
    check.addEventListener('click', function(event){
           this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses_hover').classList.toggle('courses_hover--checked');
           this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses__desc').classList.toggle("courses__desc--checked");
           this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("courses__item--checked");
            liChecked = document.querySelectorAll('.courses__list > .courses__item--checked');
            if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('courses__item--checked')){
                count++;
                setTimeout(function(){
                    check.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
                },3000);
               
                if (liChecked.length == elements.length){
                    setTimeout(function () {
                        clearCheck(liChecked,count,elements,check);
                    },2000);
                }
                }
        }) 
});


function clearCheck(liChecked,count,elements,check){
   {
        check.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses__completed').style.display='flex';
        check.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    }
};

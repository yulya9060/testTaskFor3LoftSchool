var elements = document.querySelectorAll('.courses__list > .courses__item');
var checkbox = document.querySelectorAll('.checkbox_hidden');
var liChecked = [];
var count = 0;
Array.prototype.filter.call(checkbox,function(check)
{
    check.addEventListener('click', function(event){
        console.log('checkbox ',   this.parentNode.parentNode.parentNode.parentNode.parentNode);
           this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('courses_hover').classList.toogle('.courses_hover--checked');
          //this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses__desc').classList.toogle("courses__desc--checked");
         //  this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("courses__item--checked");
            liChecked = document.querySelectorAll('.courses__list > .courses__item--checked');
            if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('courses__item--checked')){
                count++;
                console.log('1count ',count);
                console.log('2liChecked ',liChecked);
                setTimeout(clearCheck(liChecked,count,elements,check),3000);
            }
            
        }) 
});


function clearCheck(liChecked,count,elements,check){
    if (liChecked.length == elements.length){
        console.log('hello');
        console.log('3liChecked '+liChecked.length);
        console.log('4elements ',elements.length);
        console.log('5check ',check.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        check.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.courses__completed').style.display='flex';
    }
};

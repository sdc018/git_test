const accordion = document.getElementsByClassName('content-container');
console.log(accordion);
console.log(accordion[0]);

for(x=0;x < accordion.length;x++)
{
    
    accordion[x].addEventListener('click', function() {
        this.classList.toggle('active');
       console.log(this);
    });
}






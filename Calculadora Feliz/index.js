const happyForm = document.forms['happyForm'];

happyForm.addEventListener('submit',(e)=> { 
    e.preventDefault()
    console.log('Submiteado');
})


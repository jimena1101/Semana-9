const happyForm = document.forms['happyForm'];

happyForm.addEventListener('submit', (e) => {
    e.preventDefault()


    const number1 = +happyForm['number1'].value;
    const operator = happyForm['operator'].value;
    const number2 = +happyForm['number2'].value;
    result.textContent = number1 + number2
});
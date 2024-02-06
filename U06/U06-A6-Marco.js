const inputs = document.querySelectorAll('input');
const boton = document.getElementById('boton_des');
boton.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.disabled){
            input.removeAttribute('disabled');
        } else {
            input.setAttribute('disabled', '');
        }
    })
})
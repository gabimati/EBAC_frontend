const form = document.getElementById('form-numero');

let numeroA = document.getElementById('campo-a');
let numeroB = document.getElementById('campo-b');

function validaNum (nA, nB){
    const validacao = nA < nB;
    return validacao;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let formEValido = false;
    let mensagemSucesso = `O valor de <b>${numeroB.value}</b> é maior que o valor de <b>${numeroA.value}</b>, tudo certo!`;

    formEValido = validaNum(numeroA.value, numeroB.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
       
        document.querySelector('.error-message').style.display = 'none';
        numeroA.style.border = '';
        numeroB.style.border = '';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';

    }
})


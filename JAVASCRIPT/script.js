const form = document.querySelector('#form');
const imc = document.querySelector('.resultado');
let dados = [{ peso, altura }];
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');
    dados[0].peso = peso.value;
    dados[0].altura = altura.value;
    dados[0].peso = Number(dados[0].peso);
    dados[0].altura = Number(dados[0].altura);
    const imcCalculo = dados[0].peso / (dados[0].altura * dados[0].altura);
    if(imcCalculo < 18.5){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} (Abaixo do peso)`;
    }else if(imcCalculo >= 18.5 && imcCalculo <= 24.9){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} (Peso normal)`;
    }else if(imcCalculo >= 25 && imcCalculo <= 29.9){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} (Sobrepeso)`;
    }else if(imcCalculo >= 30 && imcCalculo <= 34.9){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} (Obesidade grau 1)`;
    }else if(imcCalculo >= 35 && imcCalculo <= 39.9){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} (Obesidade grau 2)`;
    }else if(imcCalculo >= 40){
        imc.innerHTML = `Seu IMC é ${imcCalculo.toFixed} (2)(Obesidade grau 3)`;
    }else{
        imc.innerHTML = 'Informações invalidas';
    }
})
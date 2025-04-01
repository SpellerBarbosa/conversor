let valor = document.getElementById('valor');
let valorNumerico = parseFloat(valor.value);
let moeda = document.getElementById('moedas');
let exbirResultado = document.getElementById('exibir_resultado');
const dolar =0.0006793;
const real = 0.003881;
const euro = 0.0006294;
let valorConvertido = undefined;

console.log(moeda.value)
function converter(){
    if(!valor.value){
        exbirResultado.classList.add('error');
        exbirResultado.classList.remove('euro');
        exbirResultado.classList.remove('dolar');
        exbirResultado.classList.remove('real');
       return exbirResultado.innerHTML = "Campo nao pode ficar vazio."
    }

    if(isNaN(valor.value)){
        exbirResultado.classList.add('error')
        exbirResultado.classList.remove('euro');
        exbirResultado.classList.remove('dolar');
        exbirResultado.classList.remove('real');
       return exbirResultado.innerHTML = "Digite um numero."
    }

    if(!moeda.value){
        exbirResultado.classList.add('error');
        exbirResultado.classList.remove('euro');
        exbirResultado.classList.remove('dolar');
        exbirResultado.classList.remove('real');
        return exbirResultado.innerHTML = "Você deve escolher uma moeda para fazer a conversão."
    }

    switch(moeda.value){
        case 'dolar':
            valorConvertido = valor.value * dolar;
            exbirResultado.classList.add("dolar");
            exbirResultado.innerHTML = `O valor convertido para dolar é: $${valorConvertido.toFixed(2)}`;
            valor.value = '';
            moeda.value = '';
            break;
        case 'euro':
            valorConvertido = valor.value * euro;
            exbirResultado.classList.add('euro');
            exbirResultado.innerHTML = `O valor convertido para euro é: $${valorConvertido.toFixed(2)}`;
            valor.value = '';
            moeda.value = '';
            break;
        case 'real':
            valorConvertido = valor.value * real;
            exbirResultado.classList.add('real');
            exbirResultado.innerHTML = `O valor convertido para real é: $${valorConvertido.toFixed(2)}`;
            valor.value = '';
            moeda.value = '';
    }
}
function encriptar() {
    const texto = entrada.value;
    const textoEncriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = entrada.value;
    const textoDesencriptado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const resultado = document.getElementById('resultado');

    if (texto == '') {
        resultado.innerHTML = '<textarea type="text" id="salida" readonly>No se escribio ningún mensaje.</textarea>' + '<button id="copiar" onclick="copiar()">Copiar</button>';
    } else {
        resultado.innerHTML = '<textarea type="text" id="salida" readonly>' + texto + '</textarea>' + '<button id="copiar" onclick="copiar()">Copiar</button>';
    }   
}

function copiar() {
    let textoCopiado = document.getElementById('salida');
    textoCopiado.select();
    document.execCommand('copy');
    alert('¡Tu mensaje ha sido copiado con éxito!');
}

var entrada = document.getElementById('entrada');
var btnEncriptar = document.getElementById('encriptar');
var btnDesencriptar = document.getElementById('desencriptar');

entrada.focus();
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

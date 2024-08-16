const texto = document.querySelector(".texto");
const texto_resultado = document.querySelector(".texto_resultado");
const botonCopiar = document.querySelector(".copiar");

// function encriptar(textoEncriptado){
//     let matriz = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
//     textoEncriptado = textoEncriptado.toLowerCase();

//     for (let i = 0; i < matriz.length; i++) {
//         if (textoEncriptado.includes(matriz[i][0])) {
//             textoEncriptado = textoEncriptado.replaceAll(matriz[i][0], matriz[i][1]);
//         }
//     }
//     return textoEncriptado;
// }
 
// function desencriptar(textoDesencriptado){
//     let matriz = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
//     textoDesencriptado = textoDesencriptado.toLowerCase();

//     for (let i = 0; i < matriz.length; i++) {
//         if (textoDesencriptado.includes(matriz[i][1])) {
//             textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][1], matriz[i][0]);
//         }
//     }
//     return textoDesencriptado;
// }

const encriptarMap = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]);

const desencriptarMap = new Map([
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
]);

function encriptar(texto){
    return texto.toLowerCase().split('').map(char => encriptarMap.get(char) || char).join('');
}

function desencriptar(texto){
    for (let [clave, valor] of desencriptarMap) {
        texto = texto.replaceAll(clave, valor);
    }
    return texto;
}

function boton_encriptar(){
    const textoEncriptar = encriptar(texto.value);
    texto_resultado.value = textoEncriptar;
    texto.value = "";
}

function boton_desencriptar(){
    const textoEncriptar = desencriptar(texto.value);
    texto_resultado.value = textoEncriptar;
    texto.value = "";
    texto_resultado.style.backgroundImage = "none";
}

botonCopiar.addEventListener('click', async function() {
    try {
        await navigator.clipboard.writeText(texto_resultado.value);
        alert("Texto copiado al portapapeles!");
    } catch (err) {
        console.error("Error al copiar al portapapeles: ", err);
    }
});

texto.addEventListener('input', function() {
    this.value = this.value.replace(/[^a-z\s]/g, '');
});
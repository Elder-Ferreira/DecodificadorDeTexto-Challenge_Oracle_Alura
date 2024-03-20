const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnCriptografar() {
  const textoCriptografado = criptografar(textArea.value);
  mensagem.value = textoCriptografado;
  textArea.value = "";
}

function criptografar(stringCriptografado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringCriptografado = stringCriptografado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringCriptografado.includes(matrizCodigo[i][0])) {
      stringCriptografado = stringCriptografado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringCriptografado;
}


function copiar() {
  mensagem.select();
  document.execCommand("copy");
  mensagem.setSelectionRange(0, 0);
  alert("Texto copiado com sucesso!");
}


function btnDescriptografar() {
  const textoDescriptografado = descriptografar(textArea.value);
  mensagem.value = textoDescriptografado;
  textArea.value = "";
}

function descriptografar(stringDescriptografado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDescriptografado = stringDescriptografado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografado.includes(matrizCodigo[i][1])) {
      stringDescriptografado = stringDescriptografado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDescriptografado;
}

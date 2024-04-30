function exibirMensagem(){
    document.getElementById("OlaMundo")
    alert("Hello World!");
}

function calcular(){
   let a = parseFloat(document.getElementById("valor1").value);
   let b = parseFloat(document.getElementById("valor2").value);

   document.getElementById("resultado").value = a+b;
    
}

function alterarPropriedadeId(){
    const elemento = document.getElementById("meuElementoId");
    elemento.style.color = "Red";
    elemento.style.fontSize = "16px";
}

function alterarPropriedade() {
    var elementos = document.getElementsByName("meuInput");

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "pink";
    }
}

function alterarPropriedadeClasse() {
    var elemento = document.querySelector('.minhaClasse');
    elemento.style.backgroundColor = 'grey';
    elemento.style.color ="purple";
    elemento.style.padding = "10px";
}
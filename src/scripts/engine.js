const emojis = [
  "🦇",
  "🦇",
  "🤩",
  "🤩",
  "😱",
  "😱",
  "🤡",
  "🤡",
  "💩",
  "💩",
  "👻",
  "👻",
  "🤖",
  "🤖",
  "👽",
  "👽",
];

let cartasAbertas = [];

let embaralharEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let caixa = document.createElement("div");
    caixa.className = "item";
    caixa.innerHTML = embaralharEmojis[i];
    caixa.onclick = identifacarClick;
    document.querySelector(".jogo").appendChild(caixa);
}

function identifacarClick(){
    if(cartasAbertas.length < 2){
        this.classList.add("virar");
        cartasAbertas.push(this);
    }

    if(cartasAbertas.length == 2){
        setTimeout(verificarCartas, 500);
    }
}

function verificarCartas(){
    if(cartasAbertas[0].innerHTML == cartasAbertas[1].innerHTML){
        cartasAbertas[0].classList.add("caixaIgual");
        cartasAbertas[1].classList.add("caixaIgual");
    }else{
        cartasAbertas[0].classList.remove("virar");
        cartasAbertas[1].classList.remove("virar");
    }
    cartasAbertas = [];

    if(document.querySelectorAll(".caixaIgual").length === emojis.length){
        alert("Você Ganhou");
        window.location.reload();
    }
}
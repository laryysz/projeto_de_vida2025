const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// Datas dos objetivos
const tempos = [
    new Date("2025-09-30T00:00:00"),
    new Date("2026-02-01T00:00:00"),
    new Date("2030-06-01T00:00:00"),
    new Date("2027-06-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;
    const segundos = Math.floor(tempoFinal / 1000) % 60;
    const minutos = Math.floor(tempoFinal / 1000 / 60) % 60;
    const horas = Math.floor(tempoFinal / 1000 / 60 / 60) % 24;
    const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        const tempo = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
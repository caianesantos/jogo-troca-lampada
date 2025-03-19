document.addEventListener("DOMContentLoaded", function () {
    const story = document.getElementById("story");
    const choices = document.getElementById("choices");
    const result = document.getElementById("result");
    const $restart = document.getElementById("restart");
    const btnTrocarAcesa = document.getElementById("trocar-acesa");
    const btnDesligarInterruptor = document.getElementById("desligar-interruptor");
    const text = document.getElementById("text")
    // const text2 = document.querySelectorAll(".text")

    function showBtnRestart(){
        const $btnRestart = document.createElement("button");
        $btnRestart.textContent = "Jogar Novamente"
        $btnRestart.addEventListener("click", function () {
            location.reload()
        })
        choices.appendChild($btnRestart)
    }

    function mostrarMensagem(mensagem, cor) {
        result.innerHTML = mensagem;
        result.style.color = cor;
        result.classList.remove("hidden");
        choices.innerHTML = ""; // Esconder botões antigos
        showBtnRestart()
    }
    
    function atualizarHistoria(mensagem, opcoes) {
        story.innerHTML = mensagem;
        choices.innerHTML = ""; // Limpa as opções anteriores
        
        opcoes.forEach(opcao => {
            const $button = document.createElement("button");
            $button.textContent = opcao.texto;
            $button.addEventListener("click", () => escolha(opcao.proximo));
            choices.appendChild($button);
        });
    }
    
    btnTrocarAcesa.addEventListener("click", function () {
        mostrarMensagem("Ops! Você levou um choque! Tente novamente.", "red");
    });

    btnDesligarInterruptor.addEventListener("click", function () {
        escolha(2);
    });

    function escolha(opcao) {
        switch (opcao) {
            case 1:
                mostrarMensagem("Ops! Você levou um choque! Tente novamente.", "red");
                break;
            case 2:
                atualizarHistoria("Ótimo! Agora você pode remover a lâmpada queimada. O que fazer?", [
                    { texto: "A) Remover a lâmpada com cuidado", proximo: 3 },
                    { texto: "B) Usar um martelo para quebrar", proximo: 4 }
                ]);
                break;
            case 3:
                atualizarHistoria("Lâmpada removida com sucesso! Agora o que fazer?", [
                    { texto: "A) Colocar a lâmpada nova", proximo: 5 },
                    { texto: "B) Deixar sem lâmpada", proximo: 6 }
                ]);
                break;
            case 4:
                mostrarMensagem("Isso é perigoso! Você se machucou. Tente novamente.", "red");
                break;
            case 5:
                atualizarHistoria("Lâmpada instalada! Agora o que fazer?", [
                    { texto: "A) Ligar o interruptor para testar", proximo: 7 },
                    { texto: "B) Sair da sala sem testar", proximo: 8 }
                ]);
                break;
            case 6:
                mostrarMensagem("A sala ficou escura! Você precisa de luz. Tente novamente.", "red");
                break;
            case 7:
                mostrarMensagem("Parabéns! Você trocou a lâmpada com sucesso!", "green");
                break;
            case 8:
                mostrarMensagem("Você esqueceu de testar! Tente novamente.", "red");
                break;   
        }
    }
});

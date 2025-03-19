document.addEventListener("DOMContentLoaded", function () {
    const story = document.querySelector("#story");
    const choices = document.querySelector("#choices");
    const result = document.querySelector("#result");
    const btnTrocarAcesa = document.querySelector("#trocar-acesa");
    const btnDesligarInterruptor = document.querySelector("#desligar-interruptor");

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
                    { texto: "A) Pegar uma escada e subir", proximo: 3 },
                    { texto: "B) Desenroscar a lâmpada", proximo: 4 }
                ]);
                break;
            case 4:
                mostrarMensagem("Você não alcança a lâmpada. Tente novamente.", "red");
                break;
            case 3:
                atualizarHistoria("Você alcançou a lâmpada. O que fazer agora?", [
                    { texto: "A) Remover a lâmpada com cuidado", proximo: 5 },
                    { texto: "B) Usar um martelo para quebrar", proximo: 6 }
                ]);
                break;
            case 6:
                mostrarMensagem("Isso é perigoso. Tente novamente.", "red");
                break;
            case 5:
                atualizarHistoria("Ótimo! Lâmpada removida. O que fazer?", [
                    { texto: "A) Colocar nova lâmpada", proximo: 7 },
                    { texto: "B) Deixar sem lâmpada", proximo: 8 }
                ]);
                break;
            case 8:
                mostrarMensagem("A sala ficou escura! Você precisa de luz. Tente novamente.", "red");
                break;
            case 7:
                atualizarHistoria("Ótimo! Pronto, e agora?. O que fazer?", [
                    { texto: "A) Testar lâmpada", proximo: 9 },
                    { texto: "B) Descer da escada", proximo: 10 }
                ]);
                break
            case 9:
                mostrarMensagem("Você caiu da escada! Tente novamente.", "red");
                break; 
            case 10:
                atualizarHistoria("Você desceu em segurança, e agora?", [
                    { texto: "A) Ligar o interruptor para testar", proximo: 11 },
                    { texto: "B) Sair da sala sem testar", proximo: 12 }
                ]);
                break; 

            case 12:
                mostrarMensagem("Você esqueceu de testar! Tente novamente.", "red");
                break;   
            case 11:
                mostrarMensagem("Parabéns! Você trocou a lâmpada com sucesso!", "green");
                break; 
                }
    }
});


/*
  Minha Vitrinecss Dev
  JavaScript e CSS desenvolvido com apoio de inteligência artificial (chatgpt).
*/

// selecionar os elementos do HTML
const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");
const botaoTema = document.getElementById("botao-tema");

const formulario = document.getElementById("formulario-contato");
const mensagemFormulario = document.getElementById("mensagem-formulario");

// menu responsivo
botaoMenu.addEventListener("click", function () {
    const menuAberto = listaMenu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "✕" : "☰";
});

// fechar o menu depois de clicar em um link
const linksMenu = listaMenu.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        listaMenu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    });
});

// saudação automática
function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
        return "Bom dia! Seja bem-vindo.";
    }

    if (hora >= 12 && hora < 18) {
        return "Boa tarde! Seja bem-vindo.";
    }

    return "Boa noite! Seja bem-vindo.";
}

const horaAtual = new Date().getHours();
const elementoSaudacao = document.getElementById("saudacao");

elementoSaudacao.textContent = obterSaudacao(horaAtual);

// alternar o tema escuro e claro
botaoTema.addEventListener("click", function () {
    const temaClaroAtivo = document.body.classList.toggle("tema-claro");

    botaoTema.textContent = temaClaroAtivo ? "🌙" : "☀️";

    botaoTema.setAttribute(
        "aria-label",
        temaClaroAtivo ? "Ativar tema escuro" : "Ativar tema claro"
    );
});

// atualizar o ano do rodapé
document.getElementById("ano-atual").textContent = new Date().getFullYear();



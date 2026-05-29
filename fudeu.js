const TELEFONE_WHATSAPP = "5518981196716";

function switchTab(aba) {
  const btnEnxoval = document.getElementById("tab-enxoval");
  const btnAjuda = document.getElementById("tab-ajuda");
  const conteudoEnxoval = document.getElementById("conteudo-enxoval");
  const conteudoAjuda = document.getElementById("conteudo-ajuda");

  if (aba === "enxoval") {
    btnEnxoval.classList.add("tabActive");
    btnAjuda.classList.remove("tabActive");

    conteudoEnxoval.classList.add("tabContentActive");
    conteudoAjuda.classList.remove("tabContentActive");
  } else {
    btnEnxoval.classList.remove("tabActive");
    btnAjuda.classList.add("tabActive");

    conteudoEnxoval.classList.remove("tabContentActive");
    conteudoAjuda.classList.add("tabContentActive");
  }
}


function toggleFaq(id) {
  const resposta = document.getElementById(`faq-answer-${id}`);
  const icone = document.getElementById(`faq-icon-${id}`);

  if (resposta.classList.contains("faqAnswerActive")) {
    resposta.classList.remove("faqAnswerActive");
    icone.style.transform = "rotate(0deg)";
  } else {
    resposta.classList.add("faqAnswerActive");
    icone.style.transform = "rotate(180deg)";
  }
}


function solicitarExoval() {
  const mensagem = `Olá, vovó! 💕\n\nConheci o *Projeto Ternura* e gostaria de saber se é possível receber o enxoval gratuito para o meu bebê recém-nascido.\n\nComo funciona para receber o carinho de vocês? Obrigado!`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${TELEFONE_WHATSAPP}&text=${mensagemCodificada}`;
  window.open(linkWhatsapp, "_blank");
}


function fazerDoacao() {
  const mensagem = `Olá! 💕\n\nAchei lindo o *Projeto Ternura* e gostaria muito de apoiar fazendo uma doação de materiais (lãs, linhas ou roupinhas de bebê).\n\nComo posso fazer para entregar a vocês?`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsapp = `https://api.whatsapp.com/send?phone=${TELEFONE_WHATSAPP}&text=${mensagemCodificada}`;
  window.open(linkWhatsapp, "_blank");
}

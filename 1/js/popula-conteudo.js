// Função para carregar JSON
async function carregarConteudo() {
  const response = await fetch('conteudo.json');
  const conteudo = await response.json();

  // Hero
  document.getElementById('titulo').innerText = conteudo.titulo;
  document.getElementById('subTitulo').innerText = conteudo.subTitulo;
  document.getElementById('descricao').innerText = conteudo.descricao;
  document.getElementById('botaoPrincipal').innerText = conteudo.botaoPrincipal;

  // Sobre
  document.getElementById('sobreTitulo').innerText = conteudo.sessaoSobre.titulo;
  document.getElementById('sobreTexto').innerText = conteudo.sessaoSobre.texto;

  // Instrutora
  document.getElementById('instrutoraTitulo').innerText = conteudo.sessaoInstrutora.titulo;
  document.getElementById('instrutoraTexto').innerText = conteudo.sessaoInstrutora.texto;

  // Provas sociais
  document.getElementById('provasTitulo').innerText = conteudo.sessaoProvasSociais.titulo;
  const depoimentosContainer = document.getElementById('depoimentos');
  conteudo.sessaoProvasSociais.depoimentos.forEach(depoimento => {
    const div = document.createElement('div');
    div.className = "bg-gray-100 p-6 rounded shadow-md max-w-sm mx-auto";
    div.innerText = depoimento;
    depoimentosContainer.appendChild(div);
  });

  // Oferta
  document.getElementById('ofertaTitulo').innerText = conteudo.sessaoOferta.titulo;
  document.getElementById('ofertaTexto').innerText = conteudo.sessaoOferta.texto;
}

// Chama a função
carregarConteudo();


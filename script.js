const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const satisfacao = document.getElementById('satisfacao');

  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroSatisfacao = document.getElementById('erro-satisfacao');

  let camposInvalidos = [];

  // Limpar erros anteriores
  [nome, email, satisfacao].forEach(campo => campo.classList.remove('error'));
  [erroNome, erroEmail, erroSatisfacao].forEach(erro => erro.textContent = '');

  // Validação
  if (!nome.value.trim()) {
    nome.classList.add('error');
    erroNome.textContent = "Campo obrigatório, preencha-o, por favor.";
    camposInvalidos.push(nome);
  }

  if (!email.value.trim()) {
    email.classList.add('error');
    erroEmail.textContent = "Campo obrigatório, preencha-o, por favor.";
    camposInvalidos.push(email);
  }

  if (!satisfacao.value.trim()) {
    satisfacao.classList.add('error');
    erroSatisfacao.textContent = "Campo obrigatório, preencha-o, por favor.";
    camposInvalidos.push(satisfacao);
  }

  if (camposInvalidos.length > 0) {
    // Rolando para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Adicionando o efeito de shake
    document.body.classList.add('shake');
    setTimeout(() => {
      document.body.classList.remove('shake');
    }, 500);
    return;
  }

  alert("Obrigado pelo seu feedback!");
  formulario.reset();
});

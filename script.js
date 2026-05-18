/**
 * DevConf 2026 — script principal
 * - Validação leve do formulário
 * - Smooth scroll já vem do CSS (html { scroll-behavior: smooth })
 * - Mensagem de sucesso quando volta da URL com ?success=true
 */

// Mostrar mensagem de sucesso ao voltar do Netlify Forms
(function checarSucesso() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === 'true') {
    const status = document.getElementById('form-status');
    if (status) {
      status.textContent = '✓ Inscrição enviada com sucesso! Nos vemos em outubro.';
      status.className = 'form-foot success';
    }
    // Rola até o formulário
    setTimeout(() => {
      document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
})();

/**
 * Validação no submit.
 * IMPORTANTE: retornamos true para o submit seguir e o Netlify capturar.
 * Se você quisesse interceptar e enviar via fetch, alteraria essa função.
 */
function validarFormulario(event) {
  const form = event.target;
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const cargo = form.cargo.value;
  const status = document.getElementById('form-status');

  // Validação simples de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome.length < 3) {
    event.preventDefault();
    status.textContent = '⚠ Por favor, informe seu nome completo.';
    status.className = 'form-foot error';
    return false;
  }
  if (!regexEmail.test(email)) {
    event.preventDefault();
    status.textContent = '⚠ Por favor, informe um e-mail válido.';
    status.className = 'form-foot error';
    return false;
  }
  if (!cargo) {
    event.preventDefault();
    status.textContent = '⚠ Por favor, selecione sua área.';
    status.className = 'form-foot error';
    return false;
  }

  // Tudo certo, deixa seguir o submit para o Netlify Forms processar
  status.textContent = 'Enviando...';
  status.className = 'form-foot';
  return true;
}

// Destacar link da navegação ativo conforme rola a página
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  const scrollY = window.pageYOffset + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(l => l.style.color = '');
      if (!link.classList.contains('btn-nav')) {
        link.style.color = 'var(--primary)';
      }
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

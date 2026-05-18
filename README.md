# 🚀 DevConf 2026 — Landing Page (Prática Netlify)

Landing page de exemplo para a atividade prática da apresentação sobre **Netlify**.
Esse repositório serve como ponto de partida para quem quer fazer o deploy passo a passo
ou como referência para quem não conseguiu acompanhar a prática ao vivo.

> **Demo ao vivo:** [https://seu-site.netlify.app](https://seu-site.netlify.app) *(substitua pela sua URL após o deploy)*

---

## 📁 O que tem aqui

```
.
├── index.html       # Página HTML com formulário do Netlify Forms
├── style.css        # Estilos (responsivo, paleta teal)
├── script.js        # Validação do formulário e UX
├── netlify.toml     # Configuração do Netlify (headers, cache)
├── .gitignore       # Arquivos ignorados pelo Git
└── README.md        # Você está aqui
```

Pilha técnica: **HTML5 + CSS3 + JS vanilla**. Sem frameworks, sem build, sem dor de cabeça.

---

## 🎯 Objetivo da prática

Ao final da atividade, você deve ter:

1. ✅ Um repositório no GitHub com este código
2. ✅ Uma URL pública do Netlify rodando o site
3. ✅ Deploy contínuo funcionando (push no Git → site atualiza)
4. ✅ Netlify Forms capturando inscrições

---

## 🛠️ Passo a passo completo

### 1. Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Netlify](https://app.netlify.com) (pode logar com o próprio GitHub)
- Git instalado na máquina

### 2. Pegar o código

Você tem duas opções:

**Opção A — Fork (mais rápido):**
1. Clique em **Fork** no canto superior direito deste repositório
2. Pronto, agora ele está na sua conta

**Opção B — Clone e suba para um repo seu (mais didático):**

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/devconf-landing.git
cd devconf-landing

# Crie um repositório novo no GitHub (pelo site), depois:
git remote set-url origin https://github.com/SEU_USUARIO/devconf-landing.git
git push -u origin main
```

### 3. Deploy no Netlify

1. Entre em [app.netlify.com](https://app.netlify.com)
2. Clique em **Add new site → Import an existing project**
3. Escolha **GitHub** e autorize o acesso ao seu repositório
4. Selecione o repositório `devconf-landing`
5. Nas configurações de build:
   - **Build command:** *(deixe vazio)*
   - **Publish directory:** `.`
6. Clique em **Deploy**

Em menos de 30 segundos seu site estará no ar com uma URL tipo
`https://random-name-12345.netlify.app`.

> 💡 Você pode renomear o site em **Site settings → Change site name**.

### 4. Testar o Netlify Forms

1. Acesse a URL do seu site
2. Role até o formulário **"Pronto pra fazer parte?"**
3. Preencha e envie
4. Volte ao dashboard do Netlify → **Forms** → você verá a submission lá! 🎉

> O atributo `data-netlify="true"` no `<form>` já avisa o Netlify para capturar.
> O input `<input type="hidden" name="form-name" value="inscricao" />` é obrigatório.

### 5. Testar o deploy contínuo

Vamos editar algo e ver a mágica acontecer:

```bash
# Edite o título principal em index.html
# Por exemplo, troque "código encontra a comunidade" por "código que muda o mundo"

git add .
git commit -m "Atualiza headline do hero"
git push
```

Volte no Netlify e veja: ele detecta o push e faz um novo deploy automaticamente.
Em poucos segundos, o site está atualizado. **Esse é o coração do Netlify.**

---

## 🎁 Desafios extras

Já fez o básico? Tente:

- [ ] **Domínio customizado** — em *Site settings → Domain management*, adicione um domínio próprio (se tiver)
- [ ] **Deploy preview** — crie uma branch, abra um Pull Request e veja a URL única que o Netlify gera para a revisão
- [ ] **Netlify Function** — crie `netlify/functions/hello.js` retornando JSON e acesse em `/.netlify/functions/hello`
- [ ] **Notificação no e-mail** — em *Forms → Settings*, configure para receber e-mail a cada nova submission
- [ ] **Variáveis de ambiente** — adicione uma `VITE_API_KEY` em *Site settings → Environment variables* e use no JS

---

## 💻 Rodando localmente

Como é HTML puro, basta abrir o `index.html` no navegador. Mas se quiser servir com um servidor local:

```bash
# Python 3
python3 -m http.server 8000

# Ou Node (npx)
npx serve .
```

Acesse `http://localhost:8000`.

> ⚠ O Netlify Forms **só funciona depois do deploy** — em localhost o submit não captura.

---

## 📚 Recursos úteis

- 📖 [Documentação oficial do Netlify](https://docs.netlify.com)
- 📝 [Netlify Forms — guia completo](https://docs.netlify.com/forms/setup/)
- ⚡ [Netlify Functions](https://docs.netlify.com/functions/overview/)
- 🎨 [Netlify CLI](https://docs.netlify.com/cli/get-started/) (para deploy direto do terminal)

---

## 🤝 Contribuições

Esse é um projeto educacional. Sinta-se livre para forkar, modificar e usar em workshops, aulas ou estudos próprios.

---

**Feito com ☕ e muito código para a apresentação sobre Netlify.**

# Garage 68 – Burger, Friends & Cars | Design Brief

## Três Abordagens Estilísticas

### 1. Pit Lane Editorial
- **Intro**: Design inspirado em revistas automotivas de luxo dos anos 60-70 (Road & Track, Quattroruote). Tipografia editorial gigante, composição assimétrica, muito espaço negativo com explosões de vermelho.
- **Probabilidade**: 0.07

### 2. Garage Noir
- **Intro**: Estética industrial escura com iluminação dramática tipo pit stop noturno. Foco em texturas metálicas, sombras profundas e revelações cinematográficas.
- **Probabilidade**: 0.04

### 3. Velocity Brutalism
- **Intro**: Brutalismo tipográfico moderno com elementos de velocidade — texto oversized, cortes diagonais agressivos, composição em grid quebrado inspirado em painéis de instrumentos.
- **Probabilidade**: 0.06

---

## Abordagem Escolhida: Pit Lane Editorial

### Design Movement
Automotive Editorial Luxury — fusão entre o design gráfico de revistas automotivas clássicas (Tipo Porsche Christophorus Magazine) e a linguagem visual de marcas premium contemporâneas (Apple, Aesop). Tipografia como protagonista, fotografia como arte.

### Core Principles
1. **Tipografia Monumental** — Headlines gigantes que dominam o viewport, criando impacto imediato
2. **Espaço como Luxo** — Generoso whitespace que transmite exclusividade e confiança
3. **Vermelho Cirúrgico** — O vermelho (#D81F26) aparece apenas em momentos de alta importância, como um carro de corrida cruzando a tela
4. **Fotografia Cinematográfica** — Imagens tratadas com contraste dramático, como frames de um filme automotivo

### Color Philosophy
- **Preto Profundo (#0A0A0A)** — O asfalto, a noite, o motor. Base dominante que evoca poder e mistério.
- **Vermelho Racing (#D81F26)** — Adrenalina controlada. Usado com parcimônia para CTAs, acentos e momentos de destaque.
- **Branco Puro (#FFFFFF)** — Velocidade, clareza, precisão. Texto principal sobre fundo escuro.
- **Cinza Aço (#1A1A1A / #2A2A2A)** — Variações para cards e superfícies elevadas.
- **Cinza Quente (#888888)** — Texto secundário, bordas sutis.

### Layout Paradigm
Layout editorial assimétrico com grid de 12 colunas quebrado intencionalmente. Seções alternam entre full-bleed photography e composições tipográficas com muito ar. Scroll horizontal pontual para galerias. Elementos posicionados off-grid para criar tensão visual. Linhas diagonais sutis evocando velocidade.

### Signature Elements
1. **Racing Stripe** — Uma linha vermelha fina (2px) que aparece como elemento de transição entre seções, evocando a faixa central de carros de corrida
2. **Speedometer Counter** — Números animados com estética de velocímetro analógico nos contadores
3. **Checkered Reveal** — Padrão xadrez (bandeira de chegada) usado como máscara de revelação em transições

### Interaction Philosophy
Interações que transmitem precisão mecânica — como girar uma chave, engatar uma marcha. Hover states com micro-rotações 3D. Botões com feedback tátil (scale down no press). Scroll suave com parallax em camadas, como olhar pela janela de um carro em movimento.

### Animation
- **Entrada**: Elementos surgem com fade + translateY(30px) com easing cubic-bezier(0.23, 1, 0.32, 1), stagger de 50ms entre itens
- **Parallax**: Imagens movem-se a 0.3x da velocidade do scroll, textos a 1x
- **Hover**: Cards elevam-se 8px com sombra expandida + rotação sutil de 1deg
- **Contadores**: Animação de 2s com easing exponencial, números rolando como odômetro
- **Revelação**: Mask-reveal horizontal da esquerda para direita, evocando velocidade
- **Typewriter**: Subtítulos digitados com cursor piscante vermelho
- **Transições**: Seções conectadas por racing stripe animada que cresce no scroll

### Typography System
- **Display/Headlines**: Oswald (condensada, bold, uppercase) — evoca painéis de corrida e garagens vintage
- **Body/Subtítulos**: Inter (regular/medium) — legibilidade premium e modernidade
- **Accent/Números**: Bebas Neue ou Oswald (para contadores e dados numéricos)
- **Hierarquia**: H1 = 5rem-8rem, H2 = 3rem-4rem, H3 = 1.5rem-2rem, Body = 1rem-1.125rem

### Brand Essence
**Posicionamento**: O ponto de encontro definitivo para quem vive de adrenalina, amizade e sabor — onde cada hambúrguer tem alma de pista.
**Personalidade**: Audacioso, Autêntico, Visceral.

### Brand Voice
Headlines e CTAs soam como um convite irrecusável de um amigo gearhead: diretos, confiantes, com uma pitada de provocação.
- Exemplo 1: "Acelere até nós. O motor já está ligado."
- Exemplo 2: "Seu próximo pit stop começa aqui."

### Wordmark & Logo
Utilizar a logo oficial da marca (emblema circular com o mascote cachorro de jaqueta de couro segurando bandeira G68, com texto "BURGER, FRIENDS & CARS" e "GARAGE 68" em vermelho e preto). No header, usar a logo em tamanho visível (48-56px) como marca registrada.

### Signature Brand Color
**Vermelho Racing #D81F26** — O vermelho de freios Brembo, de Ferraris, de semáforos de largada. Inconfundível e impossível de ignorar.

## Style Decisions
- Cada seção principal deve ser composta como um spread de revista automotiva: grid assimétrico, um gesto visual ou tipográfico dominante, espaço negativo generoso, sem ritmo padrão de cards centralizados.
- Fotografia tratada como material cinematográfico: alto contraste, escura, enquadramentos apertados de carros, burgers, pessoas e detalhes da garagem.
- Racing Red #D81F26 é cor de sinal escassa — usada apenas para ações primárias, destaques tipográficos-chave, racing stripes e numerais importantes; labels secundários e ícones de rotina não competem pelo mesmo vermelho.

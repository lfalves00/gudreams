# Formato 03 · Reverse Order (#N → #1)

> Origem: glossário §FORMATO 03 (benchmark First Day). Lista invertida com teaser "(#X may come as a surprise)" no H1. Build-up até climax emocional no #1.

## 1 · Quando usar (gating)

- Hook forte de "saber o que é o #1" prende scroll até o fim.
- Existe 1 razão contra-intuitiva que merece teaser no H1 (ex.: "#4 é o que vai te surpreender").
- Quer diferenciar visualmente de listicles de ordem direta dos concorrentes.
- Avatar emocional que responde a storytelling em escalada.

## 2 · Estrutura padrão validada

Baseado no benchmark First Day + adaptações que aplicamos em `ANGULO1/listicle-a.html`. 7 reasons é o sweet spot pra Slip (5 é curto pra densidade do produto, 10 é cansativo).

| Posição    | Função                                       | Para Slip                                           |
|------------|----------------------------------------------|---------------------------------------------------------|
| #N (1º)    | Quebra de risco                              | Garantia 30 dias + pote vazio. Permissão pra continuar lendo. |
| #N-1       | Substância racional 1                        | Tecnologia/blend específico (ex.: 3 magnésios).         |
| #N-2       | Substância racional 2                        | Outros ativos / dose clínica.                            |
| **MEIO**   | **REASON SURPRESA** (dark pillar)            | Reframe contra-intuitivo. No `listicle-a.html` é #4 cortisol. |
| #N-4       | Diferenciação técnica                        | Dose vs mercado (rótulo inflado).                       |
| #N-5       | Conveniência / ritual                        | "Ritual de 60s, não pílula" — derruba objeção prática.  |
| #1 (último)| Promessa climax emocional (dark pillar)      | Vida transformada. NÃO feature. Pico antes do CTA.      |

## 3 · Anatomia validada (de `ANGULO1/listicle-a.html`)

### Hero
- Chip "Matéria · Atualizada há 2 dias" com ícone `newspaper` (toma emprestado do Formato 04).
- H1 com `italic-display purple-600` no termo-chave + `gradient-purple` na marca: `7 motivos pra trocar [melatonina] por [Slip]`.
- Subhead curtíssimo + provocativo: `O #4 é o que vai te surpreender.` ← teaser obrigatório do formato.
- Stars 4.9 + count + byline `Por [Nome]` editorial.
- Parágrafo teaser nomeando os extremos: `Esses 7 motivos vão da garantia (#7) ao que muda tudo (#1).` ← essa frase é a que faz a ordem reversa funcionar — sem ela, o leitor não sabe que está em escalada.
- Imagem hero (foto produto).

### Press strip
Marquee com Forbes / VEJA / GQ Brasil / Men's Health / Drauzio Varella / mindbodygreen. Loop duplicado pra continuidade. Vela autoridade barata.

### Razões alternando bg
Padrão de fundo: paper → mesh-lilac → paper → mesh-lilac → **DARK pillar (#4)** → paper → mesh-lilac → paper → **DARK pillar (#1)**.

**Razão clara (paper / mesh-lilac):**
- Imagem `aspect-[4/3]` mobile / `aspect-[16/10]` desktop ACIMA do título, `rounded-[20px]`, border purple-100.
- Número `gradient-purple` 44/60px alinhado baseline com H2.
- H2 22/32px com **uma palavra-chave** em `italic-display text-purple-600`.
- Body 1 parágrafo, 16/17px, `leading-[1.7]`, `text-ink/85`.

**Razão DARK pillar (#4 e #1):**
- `mesh-purple grain text-paper` + stars animados absolutos.
- Chip pré-título `bg-teal/15 text-teal`.
- Número e accents em **teal** (não roxo — `gradient-purple` quebra em fundo escuro).
- H2 maior (24/36–40px).
- Permite elemento visual extra: gráfico SVG (cortisol 24h em #4) ou retrato em #1.
- Em #4 termina com `figure` de citação médica (border-left teal). Em #1 fecha emocional sem citação.

### Mid-scroll CTA
- Aparece IMEDIATAMENTE depois do primeiro DARK pillar (no `listicle-a.html` é entre #4 e #3).
- Tom conversacional: `Já convencida? Continua ou pula pro kit.`
- Botão `btn-primary` + linha de garantia abaixo.

### Testimonials Swiper
- 1.1 / 2 / 3 slidesPerView em 640/1024.
- 6 quotes com `editorial-quote` (aspas Fraunces grandes em purple-300).
- Mix de UGC com "assinatura" mencionada (Patrícia, Charlotte) — autorizado nesse contexto.

### Timeline cards (3 fases)
- Noite 1 (ícone `moon-star`, accent `teal-deep`) → Dias 3-7 (`sunrise`, `purple-600`) → Dias 10-15 (`sparkles`, `coral`).
- Hierarquia: cada card tem chip de período + h3 curto + 3 bullets com check.

### Buy-box CTA
- Banner de oferta (gradient purple-50 → cream-light) com `discount-badge` + "Mixer Elétrico grátis" + "Frete grátis" + ícone shield-check garantia.
- Grid `[1fr_auto]`: copy à esquerda + foto kit à direita com badge `-20%` rotacionado animate-float.
- Payment chips (Pix · Cartão 12x · Boleto) + trust seals (RA, SSL, Google, Anvisa).
- CTA aponta para `../../pdp.html`.

### FAQ
- Alpine `x-for` com 4 itens padrão (ver `_skills/general.md` §6).
- Chevron rotaciona em `data-open`.

### Sticky mobile CTA
- `x-data` com `@scroll.window.throttle.50ms`.
- Aparece quando `#r5` entra no viewport, esconde quando `#cta` entra.
- `lg:hidden`.

## 4 · Copy do hook

Variações validadas no glossário pra teaser de H1:
- "(#4 é o que vai te surpreender)" ← versão atual
- "(#3 vai mudar a sua noite)"
- "(#2 mudou tudo)"
- "(você não vai acreditar no #N)"

Regra: o teaser tem que apontar pra um reason que SEJA genuinamente contra-intuitivo, não só dramático. No `listicle-a.html` o #4 (cortisol) cumpre porque recategoriza a dor — "seu problema nunca foi sono, era cortisol".

## 5 · Cross-pollination com ângulos

O Reverse Order é o formato mais flexível pra absorver elementos de múltiplos ângulos numa única peça:
- **#1 emocional** = ângulo primário (em `ANGULO1` é a noite + corpo de volta).
- **Reason surpresa do meio** = pode ser de outro ângulo (cortisol = Ângulo 2 enxertado em peça de Ângulo 1).
- **H1 framing** = pode tomar emprestado o pivot do Ângulo 3 ("trocar melatonina por X").

Quando misturar, marcar no comentário HTML acima do bloco: `<!-- ÂNGULO 2 (cortisol pillar) — ver _skills/angles/angulo-2 -->`.

## 6 · Anti-padrões específicos do Reverse Order

- ❌ Esquecer o teaser no H1 ("(#X surpresa)") — sem ele, ordem reversa parece bug, não escolha.
- ❌ Esquecer a frase no hero que cita os dois extremos (`da garantia (#N) ao que muda tudo (#1)`) — é o "manual de leitura" pro usuário entender escalada.
- ❌ Colocar dark pillar no #N (primeiro) — quebra-risco precisa ser leve, não imersivo.
- ❌ Promessa #1 em formato de bullet ou lista — tem que ser parágrafo cinematográfico de 1 ideia.
- ❌ Mid-CTA ANTES do reason surpresa — é o pillar que dá o gatilho emocional pro CTA funcionar.
- ❌ `gradient-purple` no número dos dark pillars — usar `text-teal` (idem para H2 italic).

## 7 · Variações possíveis (não testadas ainda)

- **5 reasons reverse** — versão mais leve, conversão rápida. Sem segundo dark pillar (só o #1 vira pillar).
- **10 reasons reverse** — pra LP densa em comparação. Adicionar 2º mid-CTA depois do #5.
- **Híbrido** — começar leitura pelo #3 destaque com âncora, depois volta ao #N. Não testado.

## 8 · Checklist específico pré-publicação

Adicional ao checklist universal:

- [ ] H1 tem teaser `(#N ...)` apontando pro reason surpresa.
- [ ] Hero tem frase `da [#N extremo de risco] ao [#1 extremo emocional]`.
- [ ] #1 e #N (extremos) usam dark pillar; demais usam paper / mesh-lilac alternados.
- [ ] Mid-CTA está LOGO depois do reason surpresa (dark pillar do meio), não antes.
- [ ] Cada reason tem imagem (real ou placeholder com `<!-- IMG BRIEF -->`).
- [ ] Italic-display teal nos dark pillars; italic-display purple-600 nas razões claras.
- [ ] Sticky mobile CTA está atrelado a `#r{N-2}` (3º reason a partir do começo da leitura), não ao hero.

## 9 · Aprendizados específicos do formato

> Formato: `YYYY-MM-DD · contexto curto · aprendizado. Why: ...`

- _(vazio — preencher conforme iterarmos no Reverse Order)_

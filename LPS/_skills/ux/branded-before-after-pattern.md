# Pattern · Branded Before/After Design System

> **Origem:** consolidado em `LPS/ANGULO3/listicle-c.html` v3 (abril 2026). Validado pelo usuário como o sweet spot de "branded Slip + listicle DR + before/after testimonial".
>
> ⚠️ **AVISO CRÍTICO — REUSO NÃO É CLONAGEM:**
>
> Este pattern é um **toolkit de elementos visuais e estruturais reusáveis**, NÃO um template a ser duplicado. Quando o usuário pedir pra usar este design system de novo numa peça nova, **a página resultante DEVE ser visualmente diferente** do `listicle-c.html`. Mesma identidade, diferente expressão.
>
> **O que pode (e deve) variar entre peças que usam este pattern:**
> - Quantidade e tipo de microssecções (3 é o teto; pode ter 1 ou 2; tipos podem mudar)
> - Layout dos items (image L/text R, alternância L/R, stack centralizado, etc.)
> - Formato da foto antes/depois (split vertical, diptych horizontal, sequência 3-step, sliding before/after)
> - Estrutura do customer-tag (avatar lado, embaixo, com/sem icon Insta, com/sem cidade)
> - Hero copy direction (count-led "6 histórias", question-led "Você já se perguntou...", contrast-led "Antes/depois")
> - Bg pattern (mesh-cream, mesh-lilac, alternância de seções)
> - Headline em aspas vs declarativa
> - Quantidade de stories (5 / 6 / 7)
> - Microssecções entre items podem variar (press marquee / ritual / stats / fórmula / quote-marquee / trust badges / before-after stats / awards)
>
> **O que NÃO varia (consistência da marca):**
> - Paleta Slip (deep, purple, cream, paper, teal)
> - Fonts (Fraunces + Plus Jakarta)
> - Sales urgency banner topo (sempre presente)
> - Tom warm midnight cozy
> - Visual signature do listicle DR (image LEFT/text RIGHT items, sem cards SaaS)
>
> Antes de produzir uma 2ª peça neste pattern, **listar 3-4 variações que aplicarei** pra que ela não vire clone. Documentar a variação no skill da peça nova.

## 1 · Quando este pattern é a escolha certa

- Avatar valoriza **storytelling humano** + transformação visual (não autoridade médica ou denúncia técnica).
- Big idea = "antes/depois" multidimensional (sintomas + estados + tempos).
- Tem (ou pode aspiracionalizar) testemunhos reais com fotos.
- Precisa de **branded warm feel** (não SaaS, não editorial-jornalístico, não denúncia agressiva).
- Quer construir desejo via **identificação direta** (avatar vê pessoa parecida com ele).
- Funciona com Format 13 (Customer Stories Listicle) e potencialmente com Format 04 e Format 10 adaptados.

## 2 · Os 8 elementos do toolkit

### 2.1 Sales urgency banner topo
- `bg-deep` ou `linear-gradient(90deg, #2A1640 0%, #2A1640 100%)`
- Dot teal (●) + offer + garantia em uma linha
- Font 12-13px uppercase tracking-wider

### 2.2 Header limpo brand-led
- Wordmark à esquerda
- Link "Ver oferta ↓" à direita (desktop only)
- Sem doctor byline, sem categoria editorial
- `border-b border-purple-100 bg-paper`

### 2.3 Hero com mesh-cream + grain
- Background `mesh-cream` (radial gradients lilac + teal sutis sobre `#FAF6EC`)
- Overlay `grain` (SVG noise + opacity .06 + mix-blend-mode overlay)
- Padding generoso `pt-9 md:pt-14 pb-10 md:pb-14`
- Hero pode ter: eyebrow + dot + uppercase + H1 (com italic-display em accents purple-600) + subhead com pain pills bold + stars + count

### 2.4 Items image LEFT / text RIGHT (signature listicle)
- `grid-cols-1 md:grid-cols-[5fr_7fr] gap-6 md:gap-11`
- Image: aspect 1:1 mobile / 4:5 desktop, `border border-purple-200`, `rounded-xl md:rounded-2xl`
- Text right: eyebrow + headline + body + customer-tag
- Bg alternado entre items: `bg-paper` → `bg-cream-light/40`
- Border-top opcional entre items pra rítmica

### 2.5 Foto antes/depois (organic split visual)
- Container `aspect-[1/1]` mobile / `aspect-[4/5]` desktop
- Split vertical no meio (linha purple-600)
- Labels "ANTES" (cinza) | "DEPOIS" (teal-deep) em uppercase tracking-wide
- Sub-descrição abaixo de cada label (1 linha contextual)
- Bottom strip: descrição "Foto antes/depois orgânica · [Nome]"
- Placeholder usa repeating-linear-gradient hatching cream/lilac

### 2.6 Customer bolinha (signature do pattern)
- Avatar circular **foto real** (Unsplash ou foto cliente). Nunca gradient com iniciais (parece SaaS).
- 48-54px, `rounded-full`, `border-2 border-purple-200`
- Layout horizontal: avatar + (nome+idade / @handle / cidade) à direita
- `border-top` lilac sutil acima
- Sem badges "verificada" hard-coded — Instagram handle dá organicidade
- Opcional: ícone Instagram pequeno antes do @

### 2.7 Microssecções (low-text breaks)
- Cada uma <250px de altura, lê em 5-10 segundos
- Tipos validados:
  - **Press marquee** ("Como visto em" + 6 logos editoriais)
  - **Ritual em 60s** (3 step icons com mesh-lilac + grain bg)
  - **Stats strip** (4 números grandes Fraunces italic-display purple-600)
- Outras possíveis pra variar entre peças: trust badges grid, fórmula compacta, quote marquee scrolling, awards/selos cascade, hero shots produto, before-after stats row
- Posicionamento típico: após hero / no meio dos items / antes do CTA — mas POSIÇÃO PODE VARIAR

### 2.8 CTA card branded
- `mesh-cream + grain` background
- Eyebrow uppercase com flame icon
- H2 brand-narrator + discount tag (`linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)` yellow-orange)
- Botão btn-primary (purple gradient + shimmer)
- 3 trust badges row inline (garantia / pote vazio / sem melatonina)
- Border-top lilac

## 3 · Tons de voz (brand-curated + customer-led)

- **Brand voice (hero, microssecções, CTA):** "a gente", "ouvimos", "veja", brand-curatorial mas warm
- **Customer voice (items):** 1ª pessoa singular, conversacional brasileiro, gírias leves naturais
- **Sem doctor authority** em nenhum lugar
- **Sem corporate "Slip faz X"** — sempre embedded em descrição cliente ("o Slip trabalha por", "a fórmula do Slip concentra")

## 4 · Anti-padrões do pattern

- ❌ Reusar este pattern produzindo página com layout idêntico ao `listicle-c.html` — quebra a regra fundamental do pattern (variação obrigatória)
- ❌ Doctor byline em qualquer lugar (esse é Format 02 / 04 territory)
- ❌ Tabela comparativa estilo Beltwell topo (Format 02)
- ❌ White card wrapping items (= SaaS dashboard, ver `_skills/ux/general.md` §11)
- ❌ Avatar gradient com iniciais (parece feature card SaaS — usa foto real ou Unsplash placeholder)
- ❌ Reviews grid separado no fim (cada item já é review completa em Format 13)
- ❌ Mais de 3 microssecções (vira maratona)
- ❌ Microssecções com texto pesado (>50 palavras — quebra ritmo)

## 5 · Catálogo de variações sugeridas (pra evitar clones)

Quando reusar, escolher 3-4 variações desta lista:

**Hero variações:**
- Count-led: "6 histórias..."
- Question-led: "Você já se perguntou o que muda quando..."
- Contrast-led: "Antes era X. Hoje é Y."
- Quote-led: começa com aspas grande de 1 cliente

**Item layout variações:**
- Image LEFT (Format 04 / Format 13 v3 atual)
- Image RIGHT
- Alternating L/R por item (zigzag editorial)
- Image full-width topo + text below (Format 03 Reverse)
- Centered card-less (mobile-first stack)

**Foto antes/depois variações:**
- Split vertical (50/50 lado-a-lado) — atual
- Diptych horizontal (top/bottom)
- Slider interativo (Alpine.js — drag to compare)
- Single composite with subtle visual transformation
- 3-step sequence (antes / processo / depois)

**Microssecções variações:**
- Press marquee
- Ritual em N steps
- Stats strip
- Fórmula compacta visual
- Quote-marquee scrolling (3-4 quotes curtas)
- Trust badges row (FDA/Anvisa/orgânico/cruelty-free)
- Awards cascade (selos premiações)
- Before-after stats ("84% reportam X em N dias")

**Customer-tag variações:**
- Layout horizontal (atual)
- Layout vertical (avatar acima, info abaixo)
- Com Instagram embed mock (visual "screenshot" de post)
- Com link "Ver perfil →" pra real customer
- Sem cidade (só nome + handle)
- Com cidade + estado + país (multi-mercado)

**Bg pattern variações:**
- Hero mesh-cream / CTA mesh-cream — atual
- Hero mesh-lilac / CTA mesh-purple-deep
- Hero plain paper / CTA mesh-cream (mais sóbrio)
- Bg alternado entre items: paper/cream/lilac (3-cores)

## 6 · Aprendizados deste pattern

> Formato: `YYYY-MM-DD · contexto · aprendizado. Why: ...`

- **2026-04-23 · `LPS/ANGULO3/listicle-c.html` v3 · Pattern consolidado.** Why: usuário validou após 3 iterações. Combinação de mesh-cream + grain (do advertorial-2) + image LEFT/text RIGHT (do Everdries/Beltwell) + customer bolinha (Sofyre estendido) + 3 microssecções leves = formato "branded warm DR" que não cai em SaaS nem em editorial puro.
- **2026-04-23 · idem · Quando reusar este pattern, OBRIGATÓRIO listar 3-4 variações antes de produzir.** Why: pattern documenta o toolkit, não o layout. Sem variação consciente, o output vira clone do `listicle-c.html`. Listar variações no skill da peça nova como auto-checkpoint.
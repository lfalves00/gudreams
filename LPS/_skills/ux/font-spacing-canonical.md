# UX · Font Sizes & Spacing — Canonical Pattern (Slip CORE listicles)

> **Origem:** validado em iteração final do `LPS/CORE/01-magnesio.html` (sessão 2026-04-24). Aplicar **EXATAMENTE estes valores** em todas as 4 listicles CORE e nas próximas peças. Mudanças de fonte = quebra de identidade.

## Hero Section (Section 1)

| Elemento | Mobile | Desktop | Notes |
|---|---|---|---|
| **H1 (headline principal)** | `text-[35px]` | `sm:text-[43px] md:text-[60px]` | leading-[1.04] tracking-[-.02em] |
| **Subhead** | `text-[16.5px]` | `md:text-[17.5px]` | leading-[1.55] · MESMO tamanho do body dos items |
| **Hero trust row** (estrelas + avaliações + pills) | `text-[14px]` | `md:text-[15px]` | gap-3 flex-wrap |
| **Clinician badge info** (overlay imagem) | `font-size: 11px` | `12px` | line-height: 1.35 |

Margem H1 → subhead: `mt-5 md:mt-6`
Margem subhead → CTA inline: `mt-6 md:mt-7`
Margem CTA → trust row: `mt-6`

## Press Marquee

| Elemento | Mobile | Desktop |
|---|---|---|
| **Padding vertical** | `py-10` | `md:py-12` |
| **Margin bottom** (espaço pro item 1) | `mb-6` | `md:mb-8` |
| **Press names** | `1.05rem` | mesma (varia por veículo) |

## Itens do Listicle (per-section)

| Elemento | Mobile | Desktop | Notes |
|---|---|---|---|
| **Section padding** (entre itens) | `py-7` | `md:py-9` | bg alternado paper / cream-light/40 |
| **Eyebrow (pre-headline)** | `font-size: 13px` | `14.5px` | letter-spacing .22em uppercase color #6B3FA0 |
| **H2 (item headline)** | `text-[30px]` | `md:text-[42px]` | leading-[1.1] tracking-[-.015em] |
| **Body (descrição)** | `text-[16.5px]` | `md:text-[17.5px]` | leading-[1.65] color text-ink/85 |
| **`.item-h2-num`** (prefixo "01.") | herda do H2 | — | color #6B3FA0 opacity .55 margin-right .4em |

Margem item-head (eyebrow + border-bottom) → H2: `.item-head { margin-bottom: .9rem; padding-bottom: .8rem; border-bottom: 1px solid #E5D9F0; }`
Margem H2 → body: `mt-4` (já incluso no template)

**Última item (transição pra pitch):** padding bottom maior pra dar respiro antes do CTA card
- Item N: `pt-7 md:pt-9 pb-14 md:pb-16` (top normal, bottom maior)

## Pitch CTA Section (final)

| Elemento | Mobile | Desktop | Notes |
|---|---|---|---|
| **Section padding** | `pt-14 pb-12` | `md:pt-16 md:pb-20` | top match pb do último item; bottom = climax |
| **Mockup pote** (`.cta-mockup`) | `max-width: 320px` | `400px` | drop-shadow purple |
| **H2 (título da oferta)** | `text-[28px]` | `md:text-[44px]` | leading-[1.04] tracking-[-.02em] |
| **Subhead** (descrição do produto) | `text-[15.5px]` | `md:text-[17px]` | leading-[1.55] color text-ink/75 max-w-[560px] |
| **Botão** | `!text-[14px]` | `sm:!text-base` | `!px-5 sm:!px-8 md:!px-12` `whitespace-nowrap` (não quebra em 2 linhas mobile) |
| **Trust row** (garantia · pote vazio · sem melatonina) | `text-[13px]` | `md:text-[14px]` | gap-4 md:gap-6 flex-wrap |

## Sticky Bottom CTA (quando ativo)

| Elemento | Mobile | Desktop |
|---|---|---|
| **Padding** | `22px 16px 16px` | `same` |
| **Sales pill (sobreposta)** | `12px` | `13px` |
| **Botão** | `15px` | `16px` |
| **Trust row** | `11.5px` | `same` |

## Promo Header (top da página)

| Elemento | Mobile | Desktop |
|---|---|---|
| **Padding outer** | `9px 12px` | `12px 18px` (NOWRAP — sempre 1 linha) |
| **Gap** entre text-wrap e countdown | `12px` | `22px` |
| **Promo name** (italic Fraunces) | `13px` | `15px` |
| **Promo sub** (CAPS) | `11.5px` | `13.5px` (whitespace-nowrap) |
| **Countdown cell number** | `16px` | `18px` (Fraunces 800) |
| **Countdown label** (DIAS/HRS/MIN/SEG) | `8px` | `9px` |

⚠️ **Header NUNCA quebra em 2 linhas.** `flex-wrap: nowrap` + `flex-shrink: 0` no countdown-pill + `white-space: nowrap` no promo-sub. Se ainda quebrar em viewport mais estreito, reduzir gap ou texto, NÃO fontes.

## Regra de aplicação

- **Mudanças cosméticas pontuais** (promo banner, layout variant, etc) podem variar entre listicles.
- **Estes tamanhos/espaçamentos são imutáveis** — se uma peça quiser fugir do padrão, adicionar nota de exceção neste arquivo + skill da peça específica.
- **Reaplicar este padrão sempre que criar peça nova** ou ao detectar drift.

## Aprendizados

- **2026-04-24 · canonical lock após iteração final do #01:** validado em mobile real. Mudanças de fonte/spacing depois disso quebram identidade. Anti-padrão: bumps individuais por peça sem voltar pro canonical.

## Refinos finais (#01 + #03 — sessão tarde 2026-04-24)

### Headers (promo banner topo)
- **NUNCA quebrar em 2 linhas** — `flex-wrap: nowrap` + `white-space: nowrap` no promo-sub + `flex-shrink: 0` no countdown-pill.
- Padding: `9px 12px mobile / 12px 18px desktop`. Gap: `12px / 22px`.
- Drop "Flash Sale!" tag inline (NUTRITION variant) — não agrega, conflita com sales-pill.
- Pode hardcodar a label top com nome de campanha quando relevante (ex: #03 = "PROMOÇÃO SEMANA MUNDIAL DA SAÚDE"); senão usa `data-promo-label` dinâmico do calendar.

### Pitch CTA section
- **Subhead pos-headline:** font `16.5px / 18px` (era 15.5/17 — bump +1px).
- **Drop "Toma 30 dias —"** da subhead — info já tá no trust row abaixo. Subhead canonical: "Magnésio inteligente em 3 formas, 7 bioativos clínicos, sem melatonina. Se não sentir os primeiros sintomas mudarem, devolve."
- **Botão pitch:** `!text-[14px] sm:!text-base !px-5 sm:!px-8 md:!px-12 whitespace-nowrap` + `flex-shrink-0` no ícone — NÃO QUEBRA em 2 linhas no mobile.
- Mockup 3flav: `max-width: 320px mobile / 400px desktop`.

### Item-to-pitch transition
- Último item bottom: `pb-20 md:pb-24` (era pb-14/16 — bump pra dar mais respiro entre conteúdo e pitch).
- Pitch CTA top: `pt-20 md:pt-24` (espelha item bottom — gap visual ~120px mobile / 192px desktop).

### Trust line abaixo do CTA hero (NUTRITION variant)
- Font `text-[14px] md:text-[15px]` (+1px do antigo 13/14).
- Margin-top `mt-5 md:mt-6` (era mt-3 — mais respiro do botão).

### Hero badges/claims (overlay imagem)
- **Drop "sem compensação"** do medical claim — frio, fica só "Aprovado por +1.400 médicos".
- Use ícone inline (não em linha separada) — mesmo padrão do TikTok badge: `viral-badge--inline` com `viral-badge-icon-inline` (16/18px) + texto na mesma linha.
- Medical icon: lucide `stethoscope` (color #1A0E2C).
- TikTok claim: "Eleito **#7 produto mais viral** do TikTok" (specifico, gera credibilidade) — não "viralizou" abstrato.

### Hero subhead (universal)
- Drop "O Slip repõe 3 [tipos/formas] de magnésio diferentes" — redundante com a tabela nutricional + items.
- Drop "num chocolate quente que você toma antes de dormir" — info do formato fica no item Ritual + na PDP.
- Frase canonical termina em "...afeta tudo: sono, energia, retenção de líquido e humor."
- Use `<br>` antes do "— afeta" pra controlar quebra de linha visual.

### Hero trust row (avatares + reviews + médicos)
- Single line forçada (`flex-nowrap whitespace-nowrap`).
- Font progressivo: `text-[12px] sm:text-[13.5px] md:text-[15px]` — escala pra caber no mobile estreito.
- Texto encurtado pra fitness: "30k+" (não "30.000+ avaliações verificadas"); "+1.400 médicos" (não "+1.400 médicos endossando").

### Items — copy patterns canonical
- **Item 1 (Sono Profundo):** drop "deep sleep" → "sono profundo"; drop "Magnésio é cofator dos neurotransmissores que ativam essa fase"; P2 menciona os 3 magnésios SEM "inteligente", SEM mg individuais. Copy P1: "Sem dose suficiente de magnésio, você dorme e não restaura."
- **Item 2 (Sono Contínuo):** drop "Magnésio baixo desregula o ritmo: cortisol sobe quando devia estar no chão"; P2 começa com "**Os 3 tipos de magnésio** + L-teanina e apigenina..." (não "Magnésio inteligente").
- **Item 3 (Adormecer Rápido):** H2 "sem cabeça a mil" (não "sem ruminar" — jargão psi). P1 explica GABA como "**neuro&shy;trans&shy;missor GABA em níveis baixos**" (soft hyphen pra evitar buraco visual de quebra de linha) + "somado a cortisol alto. Sem GABA suficiente, o cérebro não consegue desligar." P2 sem mg, drop "em ~20 min" — fica "Deslizamento natural pro sono em ~20 min, sem ressaca."
- **Item 4 (Energia Diurna):** H2 "Energia genuína desde o primeiro horário do dia" (NÃO "sem precisar de café" — café é cultural BR, não confrontar). P1: "O cortisol segue um ritmo natural: sobe pela manhã pra te despertar, cai à noite pra te desligar. Quando você desregula esse ritmo, você acorda destruída e fica ligada à noite." P2: "O Slip recoloca o cortisol no eixo. Você acorda com energia genuína, sem aquela sensação de arrastar nas primeiras horas."
- **Item 5 (Desinchaço):** H2 "**Rosto** desinchado" (não "Cara"). P1: "Cortisol alto à noite = retenção de líquido pesada. **Não é gordura — é água.**" (insight + balança visual). P2 canonical: "O Slip normaliza o cortisol noturno e seu corpo desinflama. Em ~14 dias rosto e papada ficam menos inchados, a barriga perde retenção — você se sente mais leve e menos flácida." **NUNCA prometer perda de peso/definição abdominal** (blackhat). Frame: anti-inflamação + retenção, não fat loss.
- **Item 6 (Humor & Libido):** P2 começa com "**No Slip,** magnésio + L-triptofano + GABA ancoram o eixo HPA: ansiedade cai, humor estabiliza." Drop "sem suplemento de testosterona, sem nada extra" — meta-comentário desnecessário.

### Press marquee
- Veículos inventados (não usar Forbes/VEJA/GQ/Drauzio etc — branda demais). Set canonical: **NÚCLEO · VITAL · Cosmo Bem-estar · Hábito Diário · Dr. Henrique Lima · bemviver.br** (mantém variedade tipográfica via classes `press-name-forbes/veja/gq/mens/drauzio/mbg`).
- Padding maior: `py-10 md:py-12 mb-6 md:mb-8` (mais respiro pra item 1).

### Sticky bottom CTA
- HTML do `<div class="sticky-cta">` SEMPRE antes do `<script>` (não depois) — script roda ANTES do elemento existir = bug de não aparecer.

### Eyebrows refinados (BRANDED variant)
- "Noite Inteira" → "Sono Contínuo" (mais autoexplicativo standalone)
- "Pegar no Sono" → "Adormecer Rápido" (varia léxico vs H2)
- Demais OK: Sono Profundo · Energia Diurna · Desinchaço · Humor & Libido

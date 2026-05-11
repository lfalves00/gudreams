# LPS · General skills

> Universal — vale para qualquer formato e qualquer ângulo. Carregar SEMPRE antes de qualquer edit em `LPS/`.

## 1 · Pitch & compliance (listicle)

- Garantia: **30 dias, inclusive pote vazio** (NÃO 60). 60 dias é só advertorial.
- Pode citar **R$89** como valor do mixer grátis em banner de oferta. Não exibir preço do produto.
- "Assinatura" só dentro de aspas de UGC. Nunca em copy editorial.
- Stack de oferta padrão: `20% OFF + Mixer Elétrico grátis + Frete grátis`.
- CTA padrão: `Quero meu kit com 20% OFF` (e variações curtas).
- Disclaimer no footer: "não se destina a diagnosticar, tratar, curar ou prevenir...".
- Números aspiracionais: marcar `[ASPIRACIONAL]` no código quando introduzir um novo. Lista canônica em `memory/project_aspirational_numbers.md` (+1M clientes, 30.177 reviews, +1.500 médicos, 4,9★, 96% recomendam, +90 mil potes/mês, esgotamos 2x).

## 2 · Identidade visual (estrita)

- **Só** tokens já presentes em `pdp.html` e `advertorial-2.html`. Sem accents novos (já fui corrigido por inventar gold/tan).
- **Paleta Slip:**
  - **Primária `#6B3FA0`** (purple-600/DEFAULT) — roxo wine vibrante. Botões, accents, números, headlines de marca.
  - **Secundária `#8372AF`** (purple-400) — lavanda. Borders, dividers, highlights suaves.
  - **Deep `#2A1640`** (purple-800) — sales banner topo, headers escuros, fundo de pillars.
  - **Ink `#1A0E2C`** — body text base.
  - Cream `#F4EEE1`/`#FAF6EC`, paper `#FAFAF5`, teal `#5EEAD4`/`#14B8A6` (terciária), coral `#FFB8B8`, rose `#F43F5E`.
- Fontes: **Fraunces** (display, itálico = ênfase) + **Plus Jakarta Sans** (body). Nunca Inter/Roboto.
- Texturas: `grain` + `mesh-purple`/`mesh-lilac` para variar fundo. Stars animados em pillars escuros.
- Botão: `.btn-primary` (gradient roxo + sombra dupla + shimmer).
- Estética alvo: "midnight cozy" — referência Magic Mind / Recess. NÃO AI slop genérico (gradient roxo cookie-cutter em fundo branco).

> ⚠️ **CMYK→RGB lift (regra crítica):**
> A cor primária enviada pelo cliente foi `#452669` (CMYK da lata Slip — feita pra impressão). Em RGB/screen, ela lê quase preta (HSL lightness 28%) — o leitor não distingue se é roxo ou preto. **Lift aplicado para `#6B3FA0`** (mesmo hue 270°, lightness 44%) que lê claramente como roxo.
> **Princípio:** quando receber qualquer cor "fechada" do cliente vinda de embalagem/print, fazer ajuste de lightness pra screen (mantém hue + saturação, sobe lightness 15-20 pontos). Sempre validar com user antes de aplicar global.

## 3 · Stack técnico

- HTML estático, zero build, CDN-only.
- Tailwind Play CDN + Alpine.js + AOS + Swiper + Lucide + Google Fonts.
- Path para assets a partir de `LPS/ANGULOn/`: `../../assets/`.
- Imagens reais reusáveis: `hero-product.png`, `camaritual.avif`, `kit5.png`, `LOGO - SLIP ROXO PRIMÁRIO.png`, `LOGO - SLIP ROXO SECUNDÁRIO.png`, `LOGO - SLIP BRANCO.png`, `OVELHA MEL.png` (avatar de ovelha realista — pode usar como accent), `ra.png`, `SSL.png`, `google.png`, `anvisa.jpeg`. Reusar antes de criar placeholder.
- Placeholder: `.reason-img.reason-img-ph` com texto "Imagem · [descrição]" + "(gerar via IA)" em itálico.
- Sempre incluir `<!-- IMG BRIEF (#N): ... --ar 16:10 -->` como comentário acima do placeholder. Prompt curto + aspect ratio.

## 4 · Copy — tom universal

- Editorial investigativo (Folha), não sales page.
- Frases ~30% mais curtas que editorial típico. Fragmentos OK.
- Hammering de risk-reversal: "inclusive pote vazio" repetido em announcement + razão da garantia + mid CTA + buy-box. É o redutor de risco principal.
- Timeline messaging consistente: 1ª noite (sono) → 10-15 dias (corpo) → 60 dias (hábito).
- Mid CTA tom conversacional ("Já convencida? Continua ou pula pro kit.").
- Italic-display purple-600 (claro) ou teal (em pillar escuro) para palavra-chave dentro de títulos.

## 5 · Conversão (camada universal)

- Pontos de CTA padrão: nav pill, mid-scroll (após primeiro pillar escuro), FAQ-end, buy-box principal, sticky mobile.
- Trust seals só no buy-box. Não espalhar.
- Payment chips (`pay-chip-light`): Pix · Cartão 12x · Boleto.
- Sticky mobile CTA aparece quando `#r5` (ou equivalente — terceiro reason) entra no viewport, esconde quando `#cta` entra.

### Mockup do pote no CTA (OBRIGATÓRIO em todo listicle/advertorial)

Toda peça com CTA card final (listicle ou advertorial, qualquer formato/ângulo) **deve** ter o mockup do pote `assets/CHOCOLATE 1.png` no topo do CTA card. Funciona como ancoragem visual do produto antes do botão.

**CSS padrão (copiar tal e qual):**
```css
.cta-mockup {
  display: block;
  margin: 1rem auto 0;
  max-width: 140px;       /* mobile */
  width: 100%;
  height: auto;
  filter: drop-shadow(0 12px 24px rgba(75,47,174,.18));
}
@media (min-width: 768px) {
  .cta-mockup { max-width: 180px; margin-top: 1.5rem; }
}
```

**Posicionamento dentro do CTA card:**
- Logo `<img class="logo">` (se houver)
- **`<img class="cta-mockup" src="../../assets/CHOCOLATE 1.png">`** ← novo
- Eyebrow (Tempo limitado / flame)
- H2 com discount tag
- (resto do CTA)

**Quando trocar o sabor:** se a peça tiver foco específico em outro sabor (ex.: campanha sazonal morango), substituir por `MORANGO 1.png` ou `DOCE DE LEITE 1.png`. Padrão default = chocolate.

**Anti-padrões:**
- ❌ Mockup grande dominando CTA (max 140px mobile / 180px desktop é o teto).
- ❌ Mockup como hero da página (esse pattern é só pro CTA card).
- ❌ Pular o drop-shadow purple (perde o "produto flutuando" feel).

## 6 · FAQ baseline

Padrão sempre presente, trocar texto só se ângulo pedir:
- "Tem melatonina?" → Zero. Não vicia, não dá ressaca.
- "Em quanto tempo funciona?" → Sono: 1ª noite. Corpo: 10-15 dias. Hábito: 60 dias.
- "E se eu não gostar?" → 100%, inclusive pote vazio. 30 dias.
- "Posso tomar com remédio?" → Consultar médico; fórmula natural sem contraindicação conhecida.

## 7 · Anti-padrões universais (não fazer)

- ❌ Inventar cor accent fora do sistema (gold/tan etc.).
- ❌ Usar "assinatura" no copy editorial.
- ❌ Citar "60 dias" de garantia em listicle.
- ❌ Esconder a oferta — anúncio + nav + sticky + buy-box devem deixar 20% OFF visível em todos os scrolls.
- ❌ AI slop: card branco com gradient roxo cookie-cutter sem texture/grain/mesh.
- ❌ Trocar Fraunces/Jakarta por Inter/Roboto.
- ❌ Sticky mobile CTA aparecendo desde o hero.
- ❌ `gradient-purple` em fundo escuro (depende de fundo claro — em pillar escuro usar `text-teal`).
- ❌ Citar ingrediente que não está na fórmula real. Ver §9 deste arquivo pra fórmula canônica final. **Reishi, Zinco Glicinato, Cereja Azeda NÃO estão na fórmula** (apesar de aparecerem em docs antigos como `slip-project-context.json`).

## 8 · Princípios universais de ordenação (do glossário)

Resumo do "Kit de ordem" (Parte 3 do glossário). Detalhe em `_skills/universal-ordering-checklist.md` (criar quando primeiro listicle não-Reverse for produzido).

1. O #1 (ou último em reverse) é promessa emocional máxima — vida transformada, não feature.
2. O último item antes do CTA é risco-zero (garantia + condição sem atrito).
3. O meio é onde entra substância (autoridade → ingrediente → comparação → segmentação).
4. "Reason surpresa" vai no MEIO, nunca extremos.
5. Sempre ter componente temporal visível (timeline 1ª noite / 10-15 dias / 60 dias).
6. "Quote-bridge" (depoimento de 1 frase, ≤12 palavras) entre seções pesa mais que bloco final.
7. Vilão externo nomeado amplifica conversão. Para Slip: cortisol noturno (Ângulo 2), melatonina sintética (Ângulo 3), magnésio comum de farmácia (suporte universal).

## 9 · Nomenclatura técnica de ingredientes (regra crítica)

> Carregar ANTES de escrever sobre fórmula em qualquer peça. Vale para listicles, advertoriais, ads, PDP — qualquer descrição da composição.

### Fórmula canônica final (10 ingredientes — 3 magnésios + 7 bioativos)

| # | Ingrediente | Dose/serving | Tipo |
|---|---|---|---|
| 1 | Magnésio L-Treonato | 150mg | MAGNÉSIO |
| 2 | Magnésio Dimalato | 200mg | MAGNÉSIO |
| 3 | Magnésio Quelato (Bisglicinato) | 200mg | MAGNÉSIO |
| 4 | Taurina | 500mg | BIOATIVO |
| 5 | L-Teanina | 200mg | BIOATIVO |
| 6 | GABA | 100mg | BIOATIVO |
| 7 | Vitamina B6 (Piridoxina HCl) | 15mg | BIOATIVO |
| 8 | L-Triptofano | 200mg | BIOATIVO |
| 9 | Apigenina (ext. camomila) | 50mg | BIOATIVO |
| 10 | Passiflora incarnata (ext. maracujá) | 250mg | BIOATIVO |

**Total magnésio:** 550mg (150 + 200 + 200). **Total bioativos:** 7. **Total ativos:** 10.

### Magnésio Inteligente — categoria comercial, não nome técnico

**"Magnésio Inteligente" é termo de copy/marca, não ingrediente.** Nunca usar isolado quando o objetivo é informar — o lead precisa saber **quais** são os 3 magnésios.

Função de cada magnésio (use ao explicar o blend):
- **L-Treonato** (150mg) — único magnésio que atravessa a barreira hematoencefálica, atua direto no cérebro / sono profundo
- **Dimalato** (200mg) — recupera energia celular (ciclo de Krebs), reduz fadiga muscular
- **Bisglicinato / Quelato** (200mg) — alta biodisponibilidade, relaxa músculo, calmante geral

### Regra de copy

1. **Primeira menção em qualquer peça:** sempre nomear as 3 formas explicitamente. Ex: "magnésio em três formas — L-treonato, dimalato e bisglicinato".
2. **Menções subsequentes:** pode usar "magnésio inteligente" como shorthand, **desde que** as 3 formas tenham sido nomeadas em algum ponto anterior da peça.
3. **Onde pertinente** (seção "ficha técnica" / sistema completo / stack vs concorrente): citar dose individual `(150mg / 200mg / 200mg)` + total `550mg`. Em outras seções, manter ritmo editorial citando só os nomes.
4. **Bioativos com dose:** Taurina (500mg), L-Teanina (200mg), Passiflora (250mg), L-Triptofano (200mg), GABA (100mg), Apigenina (50mg), B6 (15mg). Citar dose quando o reason for sobre composição/precisão. Em copy editorial geral, nome basta.

### Por quê

"Inteligente" é poder de copy — soa diferente, marca território. Mas se o lead nunca souber o que está dentro, vira jargão de marketing vazio. A combinação ideal: **especificidade técnica + shorthand de marca**, nessa ordem.

### Notas externas (fora do repo)

- A **matriz de ads V1.0 FINAL** (`Downloads/MATRIZ ADS GUDREAMS - FINAL.pdf`, abril 2026) também tem R11 com nomenclatura antiga (Glicinato + Taurato + Treonato). **Ainda outdated.** Ignorar a nomenclatura, mas seguir todas as outras regras (R01-R26), avatares e direção estratégica da matriz.
- O `slip-project-context.json` cita Reishi, Zinco Glicinato, Cereja Azeda — **não estão na fórmula final**. Ignorar.

### Regras operacionais R01-R26 (matriz FINAL — ler em referência cruzada)

A matriz FINAL Q2 2026 tem 26 regras inegociáveis pra produção de ads (e por extensão, qualquer copy slip). Aplicáveis a listicles também. Resumo das mais relevantes pra LP/listicle:

- **R01** — Especificidade temporal vence genérico. "Quarta-feira" > "noite 1-2".
- **R02** — Coloquialismo BR obrigatório. "Cafézinho", "1 milhão de coisas", "dói", "gordurinha". Se soa tradução, reescreve.
- **R03** — Medo é cena específica, não estado emocional. "Achando que perdeu a hora" > "cabeça girando".
- **R10** — Vocabulário de marca > genérico. "Magnésio inteligente" + "chocolate quente". Mas R11 ainda manda nomear as 3 formas (ver §9 acima).
- **R16** — Agressividade é default. Se um ad/copy pode ser mais agressivo e não está sendo, está desperdiçando impressão.
- **R17** — Microcopy se lê em 2s ou não se lê. Metáfora camuflada que exige interpretação = reescreve.
- **R18** — "Desmaiar" > "dormir" no contexto de melatonina. O verbo é o frame.
- **R20** — Quando o dado tem múltiplas unidades de comparação, escolher a mais brutal. "Triplicou" > "67→91".
- **R22** — Slip é **categoria diferente**, não concorrente na mesma. Sempre "melatonina x slip" (categoria x categoria), nunca "slip entre as melatoninas".
- **R23** — Reviravolta. Quando o ranking inteiro é variações de um mesmo problema, a reviravolta no tier mais alto revela que a solução é **saída da categoria**, não variação melhor.
- **R24** — Hook de identidade futura ruim. "Se você não quer ser a pessoa que precisa tomar X pra dormir" — projeção mais forte que ataque ao presente.
- **R26** — Mecanismo técnico em 1 frase por ingrediente. Cada bioativo ganha 1 frase curta com mecanismo claro. Educa sem travar a narrativa.

Lista completa nas páginas 4-6 do PDF da matriz FINAL.

## 10 · Aprendizados universais

> Adicionar ao topo desta lista após cada sessão. Formato: `YYYY-MM-DD · escopo · aprendizado curto. Why: ...`

- **2026-04-22 · `ANGULO3/listicle-a.html` · "Magnésio Inteligente" sozinho não informa — sempre nomear as 3 formas (L-Treonato, Dimalato, Bisglicinato) na primeira menção.** Why: usuário corrigiu — "inteligente" é uma palavra boa para copy, mas o lead precisa saber QUAIS são os 3 magnésios. Shorthand "magnésio inteligente" só vale após as formas terem sido nomeadas. Onde pertinente, incluir doses individuais (150/200/200, total 550mg). Regra completa em §9.
- **2026-04-22 · `ANGULO3/listicle-a.html` · Header em listicles editoriais deve ser jornalístico (wordmark + label de seção) — não vendedor (sem trust pills com USP, sem garantia, sem oferta).** Why: usuário corrigiu — pills "Sem melatonina · Magnésio inteligente · 30 dias de garantia" davam tom sales que conflitava com a promessa editorial. Padrão correto: wordmark à esquerda + "Editorial · [seção]" minúsculo e neutro à direita. Aplicar em qualquer listicle/advertorial com framing editorial-médico.

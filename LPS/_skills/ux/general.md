# UX · General (display + responsividade)

> Catálogo de padrões de UX/layout/responsividade extraídos de referências reais e validados em `LPS/`. Cresce conforme estudamos referências novas.
>
> **Não duplicar com `_skills/general.md`:** aquele cobre identidade visual de marca (cores, fontes, anti-padrões). Aqui cobre **mecânica de display** — breakpoints, escalas, container, sticky, comportamento mobile, acessibilidade.

## 1 · Breakpoints padrão (Tailwind, alinhados com BnB e nosso uso)

| Nome  | min-width | rem    | Quando ativa                                  |
|-------|-----------|--------|-----------------------------------------------|
| (base)| 0         | —      | Mobile-first. Tudo herda daqui.               |
| `md`  | 768px     | 48rem  | Tablet portrait. Layouts 2-col aparecem aqui. |
| `lg`  | 1024px    | 64rem  | Desktop. 3-col, sticky elements, hover.       |

Evitar `sm` e `xl` exceto se o layout exigir explicitamente. Manter o set mínimo reduz casos a testar.

## 2 · Container widths

| Token Tailwind | Pixel  | Quando usar                                                              |
|----------------|--------|--------------------------------------------------------------------------|
| `max-w-sm`     | ~384   | Card isolado, formulário, callout pequeno.                               |
| `max-w-xl`     | ~576   | Hero text-only quando se quer leitura confortável centrada.              |
| `max-w-2xl`    | ~672   | Body de blog post curto.                                                 |
| `max-w-3xl`    | ~768   | Hero de listicle (subhead + byline cabem confortável).                   |
| `max-w-4xl`    | ~896   | **Body padrão de listicle/advertorial.** Igual ao BnB. Sweet spot leitura. |
| `max-w-5xl`    | ~1024  | Buy-box / blocos com 2 colunas (copy + foto produto).                    |
| `max-w-6xl`    | ~1152  | Tabelas wide, grids 3-col, footer extenso.                               |
| `max-w-7xl`    | ~1280  | Nav, hero com lateral. Pouco usado em LP.                                |

Padrão recomendado para `LPS/`: hero `max-w-3xl`, body de razões `max-w-4xl`, buy-box `max-w-5xl`, nav/footer `max-w-7xl`.

## 3 · Type scale (px diretos quando precisa precisão fora de Tailwind)

Hierarquia validada (mobile / desktop):

| Elemento                    | Mobile         | Desktop        | Notas                                       |
|-----------------------------|----------------|----------------|---------------------------------------------|
| H1 hero                     | 24-28px (1.04) | 36-44px (1.04) | Peso 700-800. Tracking -0.02em.             |
| Subhead hero                | 16-18px (1.4)  | 18-22px (1.4)  | Italic. Peso 400-500.                       |
| H2 razão                    | 18-22px (1.12) | 24-32px (1.12) | Peso 700. ALL CAPS opcional (Comparison).   |
| Número da razão (#01)       | 28-36px        | 44-60px        | Peso 800. Display serif se vier de `font-display`. |
| Body                        | 15-16px (1.7)  | 16-17px (1.7)  | Peso 400. `text-ink/85` para hierarquia.    |
| Body destaque (cita médica) | 14-15px (1.55) | 15-16px (1.55) | Italic. Border-left de 2-3px.               |
| Caption / chip              | 11-12px        | 12-13px        | Uppercase + tracking +0.18-0.22em.          |
| Footer disclaimer           | 11-12px (1.5)  | 12-13px (1.5)  | Italic. `text-ink/55`.                      |

Para Slip: `font-display` = Fraunces (titles + numbers + italic ênfase), `font-sans` = Plus Jakarta (body + chips). **Nunca Inter** mesmo se a referência usar.

## 4 · Espaçamento vertical entre seções

| Tipo de transição                         | Mobile  | Desktop |
|-------------------------------------------|---------|---------|
| Razão → razão (mesmo grupo)               | 56-72px | 96-112px |
| Bloco → buy-box                           | 64-80px | 112-160px |
| Hero → press strip                        | 24-32px | 32-48px |
| Press strip → primeira razão              | 56-72px | 96-128px |

Padding vertical das seções dark pillar: `py-16 md:py-24` (64/96px) — mais ar pra dar peso.

## 5 · Padrões de tabela comparativa

### Quando usar
Comparison Matrix Listicle (Formato 02) ou qualquer página que precise contrastar a marca contra concorrentes em 5+ critérios.

### Estrutura
- 3 colunas no máximo (4 só se absolutamente necessário).
- Coluna 1 = brand. Sempre primeira (esquerda em ltr).
- 6-8 linhas máx. Mais que isso vira ruído.
- Header destacado com cor sutil na coluna brand (ex.: `bg-purple-50` para Slip). Demais colunas neutras (`bg-paper`).
- Cada cell: ícone 👍/👎/⚠️ + opcional texto curtíssimo.

### Mobile (regras críticas — testadas em `LPS/ANGULO3/listicle-a.html`)
- **Forçar `table-layout: fixed` + `<colgroup>`** com larguras explícitas (ex.: label 42%, cada coluna de valor 19.33%). Sem isso, o navegador distribui mal e corta texto do header (ex.: "Mg comu" em vez de "Mg comum").
- **Mantém 3 colunas. Não colapsar em accordion** (perde o efeito visual de varredura).
- **Padding compacto:** cell `px-1 py-2` mobile (era `px-3 py-3.5` — corta ~40% da altura da tabela).
- **Fonte 11-12px** mobile (era 14px). Header brand 13px (Fraunces).
- **Ícones 16px** mobile (`w-4 h-4`), 20px desktop (`w-5 h-5`).
- **Labels responsivos via spans:** sempre prover versão curta mobile + versão completa desktop:
  ```html
  <td class="label">
    <span class="md:hidden">Sono profundo</span>
    <span class="hidden md:inline">Sono profundo (REM + ondas lentas)</span>
  </td>
  ```
- **Header da coluna do concorrente** quando o nome é multi-palavra ("Magnésio comum"): usar `<br/>` mobile pra forçar 2 linhas em vez de truncar:
  ```html
  <th>
    <span class="md:hidden">Mg<br/>comum</span>
    <span class="hidden md:inline">Magnésio comum</span>
  </th>
  ```

### Anti-padrões
- ❌ Mais de 4 colunas — mobile fica ilegível.
- ❌ Mais de 8 linhas — engagement cai.
- ❌ Color-coding agressivo (verde/vermelho saturado) — fica spammy. Usar apenas ícone e contraste sutil de fundo.
- ❌ `table-layout: auto` em listicle DR mobile — sempre `fixed` + colgroup.
- ❌ Header da tabela ocupando >25% da viewport mobile — força lead a scrollar muito antes da info principal (a lista). Manter tabela ≤ ~400px de altura mobile.

## 6 · Sticky elements

### Mobile
- **Sticky bottom CTA** quando uma seção âncora entra no viewport (ex.: 3ª razão). Esconder quando o buy-box entra. `lg:hidden` obrigatório.
- Padrão de implementação: Alpine.js `x-data` + `@scroll.window.throttle.50ms`. Ver `LPS/ANGULO1/listicle-a.html` linha do sticky CTA.

### Desktop
- **Sticky nav superior** com backdrop-blur (`bg-paper/95 backdrop-blur-lg`). Aparece desde o hero.
- **Sticky lateral CTA** (BnB usa `lg:sticky lg:top-6`) é OPCIONAL — útil em listicles longos com muito scroll. Não obrigatório.

## 7 · Header (top de página)

Dois padrões observados:

**A) Wordmark + 3 trust pills (BnB)**
- Wordmark à esquerda.
- 3 pílulas com emoji + texto curto à direita, separadas por divider.
- Sem CTA. Sem nav.
- Usado quando a página é standalone (sem voltar pro PDP).

**B) Wordmark + nav scroll + CTA pill (`listicle-a.html`)**
- Wordmark à esquerda.
- Texto editorial revelado on-scroll no centro ("Matéria · 7 motivos").
- CTA pill `20% OFF ↓` à direita apontando pro `#cta`.
- Usado quando a página linka pro PDP no fim.

Para listicles que VÃO linkar pro `pdp.html` (caso Slip), padrão B é melhor — CTA visível no topo facilita scroll-to-buy.

## 8 · Comportamento mobile (regras gerais)

- **Padding lateral mínimo:** `px-4` (16px) em mobile, `px-6` ou `px-8` em desktop.
- **Fonte body:** nunca menor que 15px em mobile.
- **Botões:** `h-12` mínimo (48px alvo táctil). Full-width quando crítico.
- **Sticky bottom CTA:** padding bottom `pb-22` (~88px) no body para não esconder último parágrafo atrás do sticky.
- **Imagens hero:** `aspect-[4/5]` ou `aspect-[3/4]` em mobile (vertical), `aspect-[16/10]` em desktop (horizontal).
- **Tabelas/grids:** 3 colunas só se cells curtos. Senão, empilhar em 1 coluna mobile.

## 9 · Acessibilidade (mínimo)

- Contraste body texto: AA mínimo (4.5:1). Cores `text-ink/85` sobre `bg-paper` passam.
- Botões: `aria-label` quando o conteúdo é só ícone.
- Imagens decorativas: `alt=""`. Imagens informativas: alt descritivo.
- `prefers-reduced-motion`: desabilitar AOS, Swiper autoplay, animações infinitas. Padrão do `listicle-a.html`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    [data-aos] { transition: none !important; transform: none !important; opacity: 1 !important; }
    .press-marquee-track, .btn-primary::after, .animate-float, .animate-pulse-dot { animation: none !important; }
  }
  ```

## 10 · Imagem por reason (formato visual padrão)

Aplica-se a qualquer listicle com razões numeradas (Formato 01, 02, 03). Cresceu como padrão a partir do feedback de iteração no `ANGULO3/listicle-a.html`.

### Posição
**Acima** do número da razão e da headline. Primeira coisa que o leitor vê do bloco.

### Aspect ratio
- Mobile: `aspect-[4/3]` (mais vertical, melhor pro scroll mobile).
- Desktop (`md:` em diante): `aspect-[16/10]` (mais cinematográfico, equilibra com o body de texto).

### Estilo
- `border-radius: 14px` mobile / 16px desktop.
- `border: 1px solid #E5D9F0` (purple-100).
- Quando placeholder: usar fundo dashed com hatching diagonal (cream + lilac) e texto pequeno indicando o que vai entrar:
  ```html
  <div class="reason-img reason-img-ph mb-5 md:mb-6">
    <div>
      <div class="uppercase">Imagem · descrição curta</div>
      <div class="mt-1.5 font-display italic text-ink/45 text-[11px]">(gerar via IA)</div>
    </div>
  </div>
  ```

### IMG BRIEF obrigatório
Sempre incluir comentário HTML acima do placeholder com prompt + ratio:
```html
<!-- IMG BRIEF (#01): Cápsulas derramadas + lupa no rótulo. Tom frio. --ar 16:10 -->
```

### Por quê
Sem imagem por reason, a página vira "mancha de texto" — usuário scrolla rápido sem âncoras visuais. Imagem por reason cria ritmo e ponto de descanso visual a cada bloco. Padrão validado em listicles DR (ver Beltwell, First Day, e referências DTC em geral).

## 11 · "Listicle look" vs "SaaS look" — checklist de visual signature

> Aprendizado capturado depois de auditar 5 listicles validados em PDF (Everdries, Beltwell, First Day, Clean Nutra, Shop Novalift). Os benchmarks compartilham um conjunto de tells visuais que a peça PRECISA ter pra "ler como listicle". Sem eles, o output vira cara de SaaS dashboard / brand homepage / Notion doc.

### O que faz parecer LISTICLE (validado em 5 benchmarks)

| Elemento | Padrão validado | Por quê |
|---|---|---|
| **Top da página** | SALES URGENCY banner (countdown OR discount). Cor escura/coral/laranja. Texto bold uppercase. | Sinaliza intent comercial imediato. Editorial não tem countdown. |
| **Header** | Wordmark mínimo + (opcional) link "Ver oferta ↓". Sem nav extensa, sem badge de "categoria". | Foco no conteúdo do listicle, não na navegação do site. |
| **Hero** | H1 punchy left-aligned + minimal byline + italic quote 1-2 frases. **Sem stars no centro do hero**. Sem hero photo na maioria (Everdries é exceção). | Editorial seria centered + heavy author. SaaS seria centered + features. |
| **Items** | **IMAGEM LEFT (40%) + TEXTO RIGHT (60%)** desktop. Stack mobile. Sem card wrapper. Apenas separação por `border-t` ou whitespace. | Card-wrapping = SaaS dashboard. Listicle é fluxo editorial com âncora visual à esquerda. |
| **Number** | Inline com headline ("01.") em cor de marca + Fraunces. Não floating big. | Floating big number = magazine pop / Comparison Matrix territory. Listicle DR usa inline. |
| **Headline** | **ALL CAPS bold** (Beltwell, Everdries, Shop Novalift). Sentence case só em casos editoriais (Format 04). | ALL CAPS sinaliza commercial / hard-edge — Format 13 usa. |
| **Body** | 3-5 frases conversacionais, scene-opening ("Você sabe a hora exata. 3h17."). Sem subhead interno. | Listicle DR é storytelling em prose, não bullets em card. |
| **3-state ou comparação** | Inline labels em bold/colored ("**Antes:** ... **Com X:** ... **Com Y:** ..."), embedded no fluxo do parágrafo. **NÃO mini-tabela em cards**. | Mini-tabela = dashboard widget. Inline labels = listicle prose. |
| **Customer quote** | Inline italic NO FIM do body do item. Background sutil cream + border-left lilac. Atribuição abaixo. **Sem avatar/foto** (Sofyre/Everdries não usam). | Avatar circular cards = profile UI / SaaS. Listicle usa quote tipográfica simples. |
| **End-of-list CTA** | BIG bold sales card. Discount tag prominent (yellow/gold). Stock alert OR countdown. Trust badges (guarantee / free shipping). | Editorial close seria byline sign-off. Listicle = sales pitch. |
| **Reviews section** | **Separada no fim**, depois do CTA (Beltwell pattern). Grid 2-3 colunas com 4-6 reviews curtos: stars + 1-2 frases + nome + "verified customer". | Embed reviews PER item = redundante e pesa. Bloco no fim escala social proof sem quebrar ritmo. |
| **CTA repeat** | Botão CTA repetido depois das reviews (Beltwell). | Final commercial push após segunda dose de prova social. |
| **Footer** | Mínimo: logo + Privacy/Terms/Shipping + razão social + disclaimer FDA/Anvisa. | Listicle não é portal — footer é selo de fim de matéria. |

### Anti-padrões que dão CARA DE SAAS (não fazer)

- ❌ Items wrappados em white cards com border-radius + border = dashboard widgets
- ❌ Header com badge de "categoria" (peace, heart icon, etc.) = brand homepage
- ❌ Stars no centro do hero = product hero
- ❌ Avatar gradient circles em testimonials = user profile cards
- ❌ Symptom/feature icon em colored square = SaaS feature card
- ❌ 3-state como mini-tabela com cards lado a lado = analytics dashboard
- ❌ ZERO imagens reais (só ícones) = wireframe / Notion doc
- ❌ "Por trás disso" / "Saiba mais" italic notes no fim de seções = brand-doc
- ❌ Headline em sentence case quando o tom é commercial = magazine longread, não listicle DR
- ❌ Subhead muito longo (>2 frases) no hero = blog editorial
- ❌ Centered everything (H1, sub, byline) com generous whitespace = product landing

### Por quê esses tells importam

DR listicle precisa "ler como matéria de blog que tem urgência de compra". Os tells visuais sinalizam:
- "Isso é sales" (countdown, discount, ALL CAPS) → leitor entra com mindset de oferta
- "Mas é editorial" (image-left/text-right, byline, prose) → leitor confia mais que num ad puro
- A combinação = o sweet spot do listicle DR

SaaS look quebra esse contrato — leitor entra esperando dashboard/produto, não consegue mapear pra "comprar um suplemento".

## 12 · Aprendizados de UX por referência

> Formato: `YYYY-MM-DD · referência · aprendizado. Why: ...`

- **2026-04-22 · `LPS/ANGULO3/listicle-c.html` v1 (refatorada) · Cards visuais wrappando items dão CARA DE SAAS — listicle real é flat com border-t entre items.** Why: usuário corrigiu na primeira iteração que o output ficou cara de SaaS dashboard. Audit dos benchmarks (Beltwell, Everdries, First Day, Shop Novalift) confirmou: items são fluxo editorial sem card wrapper. Regra completa em §11.
- **2026-04-22 · idem · 3-state ou comparison embutido como inline labels (`**Antes:** ... **Com X:** ...`), NÃO mini-tabela em cards.** Why: mini-tabela com cards lado a lado lê como analytics widget. Inline labels em prose lê como editorial. Match com listicle DR.
- **2026-04-22 · idem · Customer testimonials NA FORMA DE BLOQUE NO FIM (Beltwell pattern), além das inline quotes per-item.** Why: per-item testimonial CARDS = profile UI SaaS. Per-item inline quote (italic + atribuição) + reviews grid SEPARADO no fim = listicle real. Dupla dose de social proof escalável.
- **2026-04-22 · `LPS/ANGULO3/listicle-a.html` · Body 14/15px é o sweet spot pra listicles editoriais; 16/17px parece "blog grande" e quebra o ritmo de leitura DR.** Why: na primeira passada usei 16/17 como tinha em `listicle-a.html` (Reverse Order), mas pro Comparison Matrix com texto denso o 14/15 lê melhor.
- **2026-04-22 · idem · `table-layout: fixed` + colgroup é OBRIGATÓRIO em mobile.** Why: sem isso, header "Magnésio comum" virou "Mg comu" no print do usuário.
- **2026-04-22 · idem · Imagem por reason é regra (não exceção).** Why: usuário pediu explicitamente; alinha com benchmarks DR.

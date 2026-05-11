# Strategy · Scaled Product-Led Listicles (Gruns Model)

> **Origem:** virada estratégica documentada pelo usuário (sessão 2026-04-23) após análise do top 5 listicles mais escalados da Gruns. Esta é a estratégia VIGENTE pra peças core da Slip.

## 1 · Tese estratégica

A abordagem anterior (1 listicle profundo por ângulo, em pasta `ANGULO{n}/`) era **boa pra qualificação de cold lead, mas ruim pra escala**. Razões:

- **Listicles longos/nichados** convertem bem o lead que rola até o fim, mas perdem volume de tráfego no caminho.
- **Em funil flywheel omnichannel**, intent no TOPO importa mais que conversão profunda em poucas páginas. Sem volume de impressões → sem demanda → fundo de funil sem escala → blended CAC sobe.
- **Top brands DR ecom (Gruns como benchmark)** rodam **5 listicles core** sempre-ativos, todos curtos, product-first, com CTAs frequentes. Cada peça aumenta consciência **mantendo o lead**, não filtrando.

> **Princípio:** listicle core = não perde tráfego. Não qualifica cold lead a ponto de afastar quem ainda não tá pronto. Move TODOS pra próximo passo (PDP).

## 2 · Como diferentes dos `ANGULO*/listicle-{a,b,c}.html`

| Aspecto | Listicles ANGULO{n}/ (anterior) | **Listicles CORE/ (atual)** |
|---|---|---|
| Estratégia | Qualificação profunda por ângulo psicológico | **Product-first, scaled, awareness + conversão** |
| Tamanho | 6-10 razões pesadas, ~500-1500 palavras body | **5-7 razões enxutas, copy curta com punch** |
| Voz | Doctor authority, customer stories, denúncia | **Product-led, indireto mesmo quando angula** |
| CTAs | 1 mid-CTA + 1 buy-box final | **CTAs/oferta constantes ao longo da peça** |
| Pitch local | Dentro do listicle (Gruns style) — Slip difere | **Slip overrride: pitch enxuto + CTA pra PDP** |
| Final da peça | Reviews grid, FAQ, timeline, etc | **Termina na CTA pra PDP. Info do produto na PDP, não aqui.** |
| Localização | `LPS/ANGULO{n}/listicle-{a,b,c}.html` | **`LPS/CORE/0N-{slug}.html`** |

## 3 · Os 5 core listicles (briefados pelo usuário)

| # | Big idea / ângulo | Ref Gruns | Headline canônica (base do usuário, polida) |
|---|---|---|---|
| 01 | Magnésio / Magnésio Inteligente · 6 itens | Fiber-based listicle | **"6 razões pelas quais o Slip vira o melhor amigo do seu corpo"** (sessão 2026-04-23: pivô da headline canônica original "43% dos brasileiros..." pra padrão Gruns brand-affinity. Estrutura final: 01 Sono Profundo · 02 Noite Inteira · 03 Pegar no Sono · 04 Energia Diurna · 05 Desinchaço (cara/papada/pochete) · 06 Humor & Libido (ansiedade/serotonina/testosterona). Stat 43% migrou pro corpo do item #01.) |
| 02 | Por que é melhor que melatonina · 6 itens · product-led indireto | (sem ref Gruns — itens curados do `LPS/ANGULO3/listicle-b.html` + 3 transformação) | **"6 motivos do porquê melatonina destrói seu sono — e por que trocá-la pelo Slip"** (✅ feito v5: 6 itens em flow narrativo: **01 Dependência (pain anchor) · 02 Sono Profundo / fase 3 (mecanismo) · 03 Energia Natural (outcome 1) · MID-CTA · 04 Transformação Estética (outcome 2 = papada/cara/pochete) · 05 Humor & Libido (outcome 3 = ansiedade/serotonina/testosterona — sim, homem e mulher) · 06 Ritual Sensorial (close adesão)**. Subhead canônica "Magnésio afeta tudo... 3 tipos de magnésio diferentes, num chocolate quente que você toma antes de dormir". CTA hero idêntico ao final: "Economize até 44% + Frete Grátis". Layout CLEAN variant aplicado.) |
| 03 | Sono · 6 itens · "viral no TikTok" angle | Nutrition support listicle | **"6 motivos que faz todo mundo amar e postar tanto sobre a Slip no TikTok"** (✅ feito v3: pivô pro padrão NUTRITION-VARIANT do Gruns. Hero: wordmark pequeno em cima → IMAGE FULL-BLEED 5:4 (sem margem top/laterais) → review row inline (avatares + 4,9★ + 30k+ + 1.400+ médicos) → H1 Fraunces grande → subhead → sales pill yellow "100M+ doses vendidas" → CTA pill full-width "Economize até 44% + Frete Grátis" → trust line "Experimente sem risco por 30 dias". Itens layout NUTRITION: número pequeno em cima (Fraunces 18/22px purple) + H2 grande linha de baixo (Fraunces 28/36px) + image 5:3 + body. STICKY BOTTOM CTA: aparece quando user scroll passa do CTA hero (IntersectionObserver), bg deep #1A0E2C, sales pill + button + stars row, body recebe padding-bottom dinâmico.) |
| 04 | Beauty / emagrecer e desinchar · 6 itens | Weight-loss journey listicle | **"6 motivos que fazem o Slip ser obrigatório se você quer emagrecer e desinchar"** |
| 05 | Main lander · 5 sessions + 6ª = CTA pra PDP | Main lander Gruns | **"Você tem problemas hormonais de sono. O Slip resolve isso."** |

**Regra:** o usuário enviou as headlines base. Polir só gramática/pontuação/cadência — **NUNCA** trocar o ângulo nem o número de razões. As 5 headlines acima são canônicas.

## 4 · Constraints universais pros 5 (regra Slip)

- ✅ **Termina na CTA pra PDP.** A peça acaba ali. Sem reviews grid, sem FAQ, sem timeline section, sem product info detalhada — tudo isso fica na PDP.
- ✅ **Section 1 (hero/intro) → Itens da listicle → CTA pra PDP.** Esses 3 blocos. Nada além.
- ✅ **CTAs/banner de oferta CONSTANTES ao longo do scroll** (Gruns pattern). Mas oferta = só "30% OFF" + garantia (sem mixer/assinatura — pitch enxuto).
- ✅ **Copy curta, punch, storytelling com desejo.** ~50% mais enxuta que os ANGULO/listicle-{a,b,c}.
- ✅ **Mockup do pote no CTA final** (regra `_skills/general.md` §5).
- ✅ **Paleta Slip atual** (#6B3FA0 primary, #8372AF secondary, etc).
- ✅ **Mesmas fontes** (Fraunces + Plus Jakarta).
- ✅ **Itens = BENEFÍCIOS funcionais atrelados ao mecanismo central** — NÃO temas meta-produto (Ciência / Fórmula / Ritual / Comparação / Resultado). O mecanismo Slip = magnésio inteligente → controla cortisol → cascade. Cada item é um benefício que vem desse mecanismo (acordar descansado, não acordar 3h, pegar no sono rápido, energia diurna, cara desinchada, menos cravings, etc). Padrão Gruns confirmado pelo usuário (sessão 2026-04-23).

## 5 · Skill organization

Cada Gruns ref tem um arquivo em `_skills/refs/gruns/`:
- `01-fiber-based.md`
- `03-nutrition-support.md`
- `04-weight-loss-journey.md`
- `05-main-lander.md`

(#02 não tem ref Gruns — usa big ideas dos antigos `LPS/ANGULO3/listicle-{a,b,c}.html`.)

Cada ref skill captura: estrutura macro, big idea da headline, sequência dos itens, sizes/spacing, design system UX patterns, escolhas tipográficas, posicionamento de CTAs/ofertas. Quando a Slip produzir uma peça nova baseada na mesma ref, esses skills servem como template de fidelidade estrutural.

## 6 · Aprendizados / iteração

> Formato: `YYYY-MM-DD · contexto · aprendizado. Why: ...`

- **2026-04-23 · estratégia geral · Pivô de "1 listicle por ângulo" pra "5 core scaled product-led".** Why: análise do top 5 Gruns mostrou que listicles enxutos product-first geram mais intent no topo + escalam fundo de funil melhor. Listicles longos qualificam bem mas afastam tráfego. Em funil flywheel, volume de impressões > conversão profunda em poucas páginas.
- **2026-04-23 · headlines · usuário enviou as 5 headlines base canônicas (vide §3 da tabela).** Why: garantir consistência da big idea em cada peça — variações futuras só polem gramática/cadência, não trocam ângulo nem número de razões. Aplicado retroativamente em `01-magnesio.html` (substituiu "5 razões pra repor magnésio inteligente..." pela headline canônica do usuário).
- **2026-04-23 · product-first transformation sauce · TODA peça CORE precisa ter o item de transformação visível (cara desinchada / barriga sem pochete / cortisol noturno).** Why: usuário enfatizou que o sauce do Slip NÃO é só sono — é transformação. Cada listicle CORE deve listar todas as melhorias que o Slip traz, independente do ângulo de entrada. O item "transformação estética visível" é não-negociável porque é o que faz a peça vender pra qualquer público, não só quem busca dormir melhor. How to apply: TODOS os 5 CORE devem ter pelo menos 1 item dedicado a transformação física visível (rosto/corpo/cara). É o que diferencia listicle product-first de listicle nichado.
- **2026-04-23 · subhead canônica universal · "Magnésio afeta tudo — do sono e energia à digestão e ao humor. O Slip repõe em 3 formas inteligentes."** Why: usuário enfatizou que essa big idea (cascade multi-benefit do magnésio + 3 formas) é tão importante que tem que estar na subhead de TODA peça CORE, mesmo as que entram por outro ângulo (vs-melatonina, viral, beauty etc). É o que cimenta product-first em todas as peças. How to apply: pra cada CORE, abrir a subhead com o anchor angle-específico (1 frase curta) e fechar com a big idea universal "Magnésio afeta tudo... 3 formas". Total ~25-30 palavras. Exemplo aplicado em #02: "Melatonina é hormônio que vicia. Magnésio afeta tudo — do sono e energia à digestão e ao humor. O Slip repõe em 3 formas inteligentes, num chocolate quente antes de dormir."
- **2026-04-23 · CTA section copy NUNCA carrega o ângulo do hook — só a H1 carrega. CTA é product-first universal.** Why: usuário corrigiu — em #02 (vs-melatonina) o CTA inicial dizia "Largue a melatonina com até 44% OFF" e a descrição "Sua alternativa real à melatonina". Como a estratégia é product-first, o ângulo de entrada (hook H1) NÃO deve persistir no CTA. CTA deve ser idêntico/universal entre todas as peças CORE: "Comece esta noite com até 44% OFF + Frete Grátis" + descrição "Magnésio inteligente em 3 formas, 7 bioativos clínicos, num chocolate quente cremoso. Toma 30 dias — se não sentir os primeiros sintomas mudarem, devolve." How to apply: TODAS as peças CORE usam a mesma copy de CTA section (H2 + descrição). Só o hook H1 do hero varia por ângulo.
- **2026-04-23 · ITENS DO LISTICLE PODEM SER IDÊNTICOS ENTRE PEÇAS — só o H1 muda.** Why: usuário direcionou que peças product-first podem (devem?) compartilhar os MESMOS itens entre si — o que muda é o gap-setting H1. Cada H1 hook seta um motivo diferente pra "por que ler" mas o body lista os mesmos benefícios product-first do Slip (porque o produto é o mesmo). Aplicado em #03 viral-tiktok que reusa 100% dos itens do #01 magnesio (Sono Profundo · Noite Inteira · Pegar no Sono · Energia Diurna · Desinchaço · Humor & Libido). How to apply: pra peças CORE que compartilham layout BRANDED, considerar reusar a mesma sequência de 6 itens. Variação fica nas H1 + subhead + IMG hero. Reduz custo de produção e mantém consistência product-first.
- **2026-04-23 · 2 layouts disponíveis: BRANDED (#01, #03) vs CLEAN (#02). Decisão por feel da peça.** Why: BRANDED = Fraunces serif H1 com purple highlights + italic-display, hero mesh-cream + grain bg, image com badge clinician 5:3, items com eyebrow + número badge inline. Mais "brand-affinity / aspiracional". CLEAN = Plus Jakarta sans-serif H1 sem highlights, hero clean bg-paper, image sem badge, items image-first sem eyebrow + fade gradient. Mais "factual / utilitário". Pra peças product-first universais (magnésio, viral, beauty, main lander) usar BRANDED. Pra peças de comparação/attack (vs-melatonina) usar CLEAN.
- **2026-04-23 · 3º variant disponível: NUTRITION-VARIANT (Gruns nutrition support pattern) usado em #03 viral-tiktok.** Why: usuário trouxe ref Gruns nutrition page com layout próprio: (1) wordmark Slip pequeno acima da image, (2) IMAGE HERO FULL-BLEED 5:4 (sem padding/margem top/laterais — toca as bordas), (3) content area abaixo com review row inline (avatares + stars + reviews + médicos), H1 Fraunces grande (purple highlights + italic-display ainda OK), subhead, (4) Items layout NUTRITION: número pequeno em cima (Fraunces 18/22px purple, line height 1) + H2 grande logo abaixo (Fraunces 28/36px deep) + image 5:3 + body. SEM eyebrow caps, SEM separator line.
- **2026-04-23 · sales pill SOBREPOSTA no botão CTA (não acima dele) — Gruns ribbon pattern.** Why: usuário corrigiu — no Gruns a yellow pill fica meio dentro / meio fora do botão (top edge da pill alinha com o top do botão, half pop-out). CSS: wrapper `.cta-with-pill` com `position: relative; margin-top: 1.5rem;` + `.cta-with-pill .sales-pill` com `position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); z-index: 2;`. Same pattern usado tanto no hero quanto no sticky. How to apply: SEMPRE usar `.cta-with-pill` como wrapper quando combinar pill + button.
- **2026-04-23 · sales pill copy: "+30 mil doses vendidas" (não "100M+ doses vendidas").** Why: 100M era aspirational demais e gerava descrédito. 30k é o número real Slip. How to apply: padrão pros 5 CORE.
- **2026-04-23 · sticky bottom bg deep PURPLE (não ink).** Why: usuário corrigiu — `#1A0E2C` (ink) ficou pesado demais, "preto demais". Trocado pra gradient `linear-gradient(180deg, rgba(58,31,88,.98) 0%, rgba(74,42,108,.98) 100%)` + `backdrop-filter: blur(8px)` — bg purple-700 com leve gradiente, mais leve visualmente mas ainda contrasta. How to apply: padrão pros próximos sticky CTAs.
- **2026-04-23 · sticky bottom DESAPARECE quando final CTA entra em viewport.** Why: usuário corrigiu — não pode coexistir 2 CTAs na mesma tela. Solução: 2 IntersectionObservers em paralelo + state `heroPassed && !finalVisible`. Observer 1 = hero CTA (sumiu pelo topo). Observer 2 = `#cta` final section (entrou em viewport). Sticky só visible quando heroPassed=true E finalVisible=false. How to apply: padrão pros próximos sticky CTAs (qualquer peça com sticky precisa hide quando atinge final pitch).
- **2026-04-23 · reaproveitar conteúdo curado dos ANGULOS quando o ângulo se alinhar.** Why: itens de `LPS/ANGULO3/listicle-b.html` já tinham sido validados em iterações anteriores e listam transformações product-first. Pra `02-vs-melatonina.html` (mesmo ângulo melatonina-vs-magnésio), copiamos os 7 itens com pequenas adaptações de eyebrow + número inline + texto polido. How to apply: antes de escrever items do zero, checar se ANGULO{N}/listicle-{a,b,c}.html já tem material curado pro mesmo ângulo. Reaproveita.

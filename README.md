# GUDREAMS — Advertorial 2 (V5)

## 📦 Estrutura

```
advertorial-2-final/
├── advertorial-2.html             ← Página HTML (1978 linhas)
└── assets/
    ├── logo-gudreams-white.png
    ├── logo-gudreams-dark.png
    └── hero-product.png
```

## 🧩 Como integrar

Mover pros arquivos correspondentes em `gudreams/`:
- `advertorial-2.html` → raiz
- `assets/*` → `gudreams/assets/` (mescla)

---

## ✨ O que mudou nesta V5

### 1. Navbar scrolled corrigida
- **Sem margem top visível** quando rola (usa `!top-0` pra sobrescrever o top-[34px] da announcement bar)
- **Logo que aparece no mobile** — usando `block` explícito na imagem + altura reduzida (h-6 md:h-7)
- **Padding interno menor no mobile** — `py-2.5 md:py-3.5` (antes era py-4 sempre)
- **Elementos mais compactos** — CTA reduzido (px-3, py-1.5, text-xs), ícones menores
- **Crédito editorial no mobile** — "gudreams × Folha" em linha única compacta em vez de 2 linhas

### 2. Hero (Seção 1) reformulado pra mobile
- **Padding top menor** — `pt-24 md:pt-28` (antes `pt-28 md:pt-32`)
- **Padding bottom menor** — `pb-10 md:pb-14` (antes `pb-12 md:pb-16`)
- **Padding lateral menor** — `px-4 md:px-8` (antes `px-5 md:px-8`)
- **Press badges unificados em 1 linha só** — antes eram 2 pills que quebravam no mobile, agora é 1 pill só com "Gudreams × Folha de S. Paulo | Especial"
- **Headline fluida** — removi os `<br>` forçados, deixei o browser quebrar naturalmente
- **Cards com duotone mais forte** — o 1º card (relógio) tava amarelo/laranja pela foto, agora tem overlay deep + duotone de purple/rose mais denso pra ficar on-brand
- **Subhead com padding lateral** — evita quebras estranhas do texto no mobile
- **Margins internas menores em todos os elementos** — mb-5, mb-3, mb-4 em vez de mb-8/mb-10

### 3. Sticky CTA mobile
- **Antes:** "Entender como funciona" (genérico demais)
- **Agora:** **"Quero meu Gudreams"** (direto, desejo de posse)
- Link direto pra `./pdp.html` (intent de compra)

---

## 🚀 Como testar

```bash
cd gudreams
python3 -m http.server 8000
```

Abre `http://localhost:8000/advertorial-2.html`

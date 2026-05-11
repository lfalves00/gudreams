# Blead filter · review pass

> **Status: STUB · não ativo ainda no pipeline.** Estrutura criada, conteúdo vazio. Ativar quando começarmos a popular as regras com o filtro real da equipe Blead.
>
> **Quando ativar:** mudar o gate "Blead filter" no `SKILLS.md` (Pipeline visual + §6 do fluxo) de "STUB · não ativo" pra obrigatório, e remover esta linha do topo.
>
> **Função:** último review pass antes do output. Roda DEPOIS dos checklists universal + formato. Aplica a lente da equipe Blead — o que eles flaggariam se vissem isso. Cresce continuamente: cada vez que uma peça volta da Blead com correção, gravar a regra aqui.

---

## Como ler este arquivo no fluxo

1. Carregar **§1 Universal** sempre.
2. Carregar **§2.<formato>** se o formato em produção tem subsection.
3. Carregar **§3.<ângulo>** se o ângulo em produção tem subsection.
4. Rodar cada item como pergunta crítica: "a Blead apontaria isso?". Se sim, corrigir antes do output.

Se uma regra aparece em mais de um nível (universal e formato), a mais específica ganha — só pra evitar duplicar trabalho mental.

---

## §1 · Universal · como a Blead pensa em qualquer peça

> Regras que valem pra qualquer formato e ângulo. Se Blead corrige a mesma coisa em peças diferentes, a regra entra aqui.

- _(vazio — adicionar conforme equipe Blead aponta padrões)_

### Anti-padrões universais flaggáveis

- _(vazio)_

### Tom / linguagem que Blead corta

- _(vazio)_

### Claims que Blead exige fonte

- _(vazio)_

---

## §2 · Por formato

Subsections só pra formatos onde a Blead tem regra micro específica que NÃO se aplica em outros. Se a regra vale pra todos, vai pra §1.

### §2.03 · Reverse Order (#N → #1)

- _(vazio)_

> Adicionar subsections de outros formatos (`§2.01`, `§2.04`, etc.) conforme produzirmos.

---

## §3 · Por ângulo

### §3.1 · Problema de sono

- _(vazio)_

> Adicionar `§3.2 Cortisol alto`, `§3.3 Alternativas falhas` conforme produzirmos peças desses ângulos.

---

## §9 · Aprendizados / histórico de regras

> Cada vez que Blead aponta algo novo, gravar aqui antes de mover pra §1/§2/§3 acima. Serve como log de origem da regra.
>
> Formato: `YYYY-MM-DD · peça/contexto · regra capturada → movida para §X. Why: ...`

- _(vazio — preencher quando começarmos a usar o filtro)_
